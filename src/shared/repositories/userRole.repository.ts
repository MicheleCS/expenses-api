import { EntityRepository, Repository, getRepository } from "typeorm";
import { UserRole } from "../database/entities/userRole.entity";
import { CreateUserRoleDTO } from "../dtos/userRole/createUserRole.dto";

@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {
  private ormRepository: Repository<UserRole>;

    constructor(){
      super();
      this.ormRepository = getRepository(UserRole);
    }

  async createUserRole(dto: CreateUserRoleDTO): Promise<UserRole> {
    const userRole = this.create(dto);
    return await this.save(userRole)
  }

  async getAllUseRole(): Promise<UserRole[]> {
    return await this.find()
  }

  async getOneUserRole(id: string): Promise<UserRole | undefined> {
    return await this.findOne({id});
  }

  async deleteUserRole(id: string): Promise<void> {
    await this.delete(id);
  }
}