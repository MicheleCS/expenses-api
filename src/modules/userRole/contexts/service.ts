import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRoleRepository)
    private repository: UserRoleRepository,

  ){}

  async findOne(id: string) {
    return await this.repository.getOneUserRole(id);
  }

  async remove(id: string) {
    await this.repository.deleteUserRole(id);
  }
}
