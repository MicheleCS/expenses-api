import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "src/modules/user/contexts/service";
import { LoginDTO } from "src/shared/dtos/auth/loginBody.dto";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";
import { UserRepository } from "src/shared/repositories/user.repository";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { usernameOrPasswordInvalid } from "../constants";

@Injectable()
  export class AuthService {
    constructor(
      @Inject(UserService)
      private userService: UserService,
      @Inject(JwtService)
      private jwtService: JwtService,
      @Inject('ENCRYPT_PROVIDER') 
      private encryption: BcryptProvider,
      @InjectRepository(UserRepository)
      private userRepository: UserRepository,
      @InjectRepository(UserRoleRepository)
      private userRoleRepository: UserRoleRepository
    ){}
  async validateUser(username: string, password: string): Promise<any> {
  const user = await this.userService.getByEmail(username);
  if (!user) return false
  const passwordMatched = this.encryption.compareHash(password, user.password)
  if (!passwordMatched) return false

  return true
  } 

  async login(user: LoginDTO) {
  const userFinded = await this.userRepository.findByEmail(user.email);
  const hashed = await this.encryption.compareHash(
    user.password, 
    userFinded.password
  );
  
    if (!hashed) {
    throw new UnauthorizedException(usernameOrPasswordInvalid);
  }
  const userRole = await this.userRoleRepository.getOneUserRole(userFinded.id)
  
  const payload = { 
    email: user.email, 
    sub: userFinded.id };
  
  const token = await this.jwtService.sign(payload);
  return {
    accessToken: token,
    userRole: userRole.name,
    userId: userFinded.id
  };
  }
}
