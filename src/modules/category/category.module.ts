import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryRepository } from "src/shared/repositories/category.repository";
import { CategoryController } from "./contexts/controller";
import { CategoryService } from "./contexts/service";

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  controllers:[CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}