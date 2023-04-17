import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDTO } from "src/shared/dtos/auth/loginBody.dto";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";
import { UserRepository } from "src/shared/repositories/user.repository";
import { usernameOrPasswordInvalid } from "../constants";

@Injectable()
export class LoginService {
  constructor(
    @Inject(JwtService)
    private jwtService: JwtService,
    @Inject('ENCRYPT_PROVIDER')
    private encryption: BcryptProvider,
    @Inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findByEmail(username);
    if (!user) return false;
    const passwordMatched = this.encryption.compareHash(
      password,
      user.password,
    );
    if (!passwordMatched) return false;

    return true;
  }

  async login(user: LoginDTO) {
    const userFinded = await this.userRepository.findByEmail(user.email);
    const hashed = await this.encryption.compareHash(
      user.password,
      userFinded.password,
    );
    if (!hashed) {
      throw new UnauthorizedException(usernameOrPasswordInvalid);
    }
    const payload = {
      email: user.email,
      sub: userFinded.id,
    };

    const token = await this.jwtService.sign(payload);
    return {
      accessToken: token,
      userId: userFinded.id,
    };
  }
}
