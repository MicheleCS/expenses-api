import { ConflictException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserRoleBodyDTO } from "src/shared/dtos/userRole/createUserRoleBody.dto";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRoleRepository)
    private repository: UserRoleRepository,
  ){}

  async create(dto: CreateUserRoleBodyDTO) {
    return this.repository.createUserRole(dto);
  }

  async findOne(id: string) {
    return await this.repository.getOneUserRole(id);
  }

  async remove(id: string) {
    await this.repository.deleteUserRole(id);
  }
}
