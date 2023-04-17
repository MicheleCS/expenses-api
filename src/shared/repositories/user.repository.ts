import { EntityRepository, Repository, getRepository } from "typeorm"
import { User } from "../database/entities/user.entity"
import { CreateUserDTO } from "../dtos/user/createUser.dto"
import { UpdateUserDTO } from "../dtos/user/updateUser.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private ormRepository: Repository<User>;

  constructor() {
    super();
    this.ormRepository = getRepository(User);
  }

  async createUser(dto: CreateUserDTO): Promise<User> {
    const user = await this.create(dto);
    return this.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.findOne({ email });
  } 

  async getAllUser(): Promise<User[]> {
    return this.find()
  }

  async getOneUser(id: string): Promise<User | undefined> {
    return await this.findOne({id});
  }

  async updateUser(userId: string, dto: UpdateUserDTO): Promise<void> {
    await this.update(userId, dto);
  }

  async deleteUser(id: string): Promise<void> {
    await this.delete(id);
  }
}