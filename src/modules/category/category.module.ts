import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryRepository } from "src/shared/repositories/category.repository";
import { CategoryController } from "./contexts/controller";
import { CategoryService } from "./contexts/service";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  controllers:[CategoryController],
  providers: [CategoryService, { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [CategoryService]
})
export class CategoryModule {}