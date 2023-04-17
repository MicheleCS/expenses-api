import { EntityRepository, Repository, getRepository } from "typeorm";
import { Role } from "../database/entities/role.entity";
import { CreateRoleDTO } from "../dtos/role/createRole.dto";

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  private ormRepository: Repository<Role>;

    constructor(){
      super();
      this.ormRepository = getRepository(Role);
    }

  async createRole(dto: CreateRoleDTO): Promise<Role> {
    const Role = this.create(dto);
    return await this.save(Role)
  }

  async getAllole(): Promise<Role[]> {
    return await this.find()
  }

  async getOneRole(id: string): Promise<Role | undefined> {
    return await this.findOne({id});
  }

  async deleteRole(id: string): Promise<void> {
    await this.delete(id);
  }
}