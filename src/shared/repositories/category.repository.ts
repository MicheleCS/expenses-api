import { EntityRepository, Repository, getRepository } from "typeorm";
import { Category } from "../database/entities/category.entity";
import { CreateCategoryDTO } from "../dtos/category/createCategory.dto";
import { UpdateCategoryDTO } from "../dtos/category/updateCategory.dto";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  private ormRepository: Repository<Category>;

    constructor(){
      super();
      this.ormRepository = getRepository(Category);
    }
  
  async createCategory(dto: CreateCategoryDTO): Promise<Category> {
    const category = this.create(dto);
    return await this.save(category);
  }

  async getAllCategory(): Promise<Category[]> {
    return await this.find();
  }

  async getOneCategory(id: string): Promise<Category> {
    return await this.findOne({id});
  }

  async updateCategory(id: string, dto: UpdateCategoryDTO): Promise<void> {
    await this.update(id, dto);
  }

  async deleteCategory(id: string): Promise<void> {
    await this.delete(id);
  }
}
