import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/shared/database/entities/category.entity";
import { CreateCategoryBodyDTO } from "src/shared/dtos/category/createCategoryBody.dto";
import { UpdateCategoryBodyDTO } from "src/shared/dtos/category/updateCategoryBody.dto";
import { CategoryRepository } from "src/shared/repositories/category.repository";
import { EntityNotFoundError } from "typeorm";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private repository: CategoryRepository,

  ){}

  async create(dto: CreateCategoryBodyDTO) {
    return this.repository.createCategory(dto);
  }

  async findOne(id: string) {
    return await this.repository.getOneCategory(id);
  }

  async update( dto: UpdateCategoryBodyDTO): Promise<void> {
    const findedCategory = await this.repository.getOneCategory(dto.id)
    if(!findedCategory) {
      throw new EntityNotFoundError(Category, dto.id)
    }

    await this.repository.updateCategory(dto.id, {
      ...dto,
    })
  }

  async remove(id: string) {
    await this.repository.deleteCategory(id);
  }
}
