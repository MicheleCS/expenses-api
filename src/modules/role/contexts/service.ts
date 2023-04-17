import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRoleBodyDTO } from "src/shared/dtos/role/createRoleBodyDTO";
import { RoleRepository } from "src/shared/repositories/role.repository";

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ){}

  async create(dto: CreateRoleBodyDTO) {
    return this.repository.createRole(dto);
  }

  async findOne(id: string) {
    return await this.repository.getOneRole(id);
  }

  async remove(id: string) {
    await this.repository.deleteRole(id);
  }
}
