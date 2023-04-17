import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "src/shared/database/entities/role.entity";
import { User } from "src/shared/database/entities/user.entity";
import { CreateUserRoleBodyDTO } from "src/shared/dtos/userRole/createUserRoleBody.dto";
import { RoleRepository } from "src/shared/repositories/role.repository";
import { UserRepository } from "src/shared/repositories/user.repository";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { EntityNotFoundError } from "typeorm";

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRoleRepository)
    private repository: UserRoleRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
  ) {}

  async create(dto: CreateUserRoleBodyDTO) {
    const user = await this.userRepository.getOneUser(dto.user_id);
    if (!user) throw new EntityNotFoundError(User, dto.user_id);

    const role = await this.roleRepository.getOneRole(dto.role_id);
    if (!role) throw new EntityNotFoundError(Role, dto.role_id);

    return this.repository.createUserRole({ user, role });
  }

  async findOne(id: string) {
    return await this.repository.getOneUserRole(id);
  }

  async remove(id: string) {
    await this.repository.deleteUserRole(id);
  }
}
