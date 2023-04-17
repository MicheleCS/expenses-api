import { ConflictException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/shared/database/entities/user.entity";
import { CreateUserBodyDTO } from "src/shared/dtos/user/createUserBody.dto";
import { UpdateUserBodyDTO } from "src/shared/dtos/user/updateUserBody.dto";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";
import { UserRepository } from "src/shared/repositories/user.repository";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { EntityNotFoundError } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(UserRoleRepository)
    private userRoleRepository: UserRoleRepository,
    @Inject('ENCRYPT_PROVIDER') 
    private encryption: BcryptProvider,
  ){}

  async create( dto: CreateUserBodyDTO){
    const roleFinded = await this.userRoleRepository.getOneUserRole(dto.userRoleId)
    if (!roleFinded) {
      throw new NotFoundException('role-not-found')
    }
    let userFinded = await this.userRepository.findByEmail(dto.email)
    if (userFinded) {
      throw new ConflictException('email-already-exists')
    }
    const hashedPassword = await this.encryption.createHash(dto.password)
    return await this.userRepository.createUser({...dto, password: hashedPassword});
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({email:email});
  }  

  async findOne(id: string) {
    return await this.userRepository.getOneUser(id);
  }

  async update( userId: string, dto: UpdateUserBodyDTO): Promise<void> {
    const findedUser = await this.userRepository.getOneUser(userId)
    if(!findedUser) {
      throw new EntityNotFoundError(User, userId)
    }

    await this.userRepository.updateUser(userId, {
      ...dto,
    })
  }

  async remove(id: string) {
    await this.userRepository.deleteUser(id);
  }
}
