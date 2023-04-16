import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./service";
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { UpdateCategoryBodyDTO } from "src/shared/dtos/category/updateCategoryBody.dto";

@ApiTags('categorys')
@Controller('categorys')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService){}

  @ApiBearerAuth()
  @Get(':id')
  @HttpCode(200)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findOne(@Param('id') id:string) {
    return await this.categoryService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch()
  @HttpCode(204)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() categoryId: string, updateCategoryBodyDTO: UpdateCategoryBodyDTO) {
    await this.categoryService.update(categoryId, updateCategoryBodyDTO);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @HttpCode(204)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id')id: string){
    return await this.categoryService.remove(id);
  }  
}
