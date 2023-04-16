import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/shared/database/entities/user.entity";
import { UpdateUserBodyDTO } from "src/shared/dtos/user/updateUserBody.dto";
import { UserRepository } from "src/shared/repositories/user.repository";
import { EntityNotFoundError } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,

  ){}

  async findOne(id: string) {
    return await this.repository.getOneUser(id);
  }

  async update( userId: string, dto: UpdateUserBodyDTO): Promise<void> {
    const findedUser = await this.repository.getOneUser(userId)
    if(!findedUser) {
      throw new EntityNotFoundError(User, userId)
    }

    await this.repository.updateUser(userId, {
      ...dto,
    })
  }

  async remove(id: string) {
    await this.repository.deleteUser(id);
  }
}
