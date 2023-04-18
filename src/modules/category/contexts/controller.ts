import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UpdateCategoryBodyDTO } from "src/shared/dtos/category/updateCategoryBody.dto";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guards";
import { CreateCategoryBodyDTO } from "src/shared/dtos/category/createCategoryBody.dto";
import { instanceToInstance } from "class-transformer";
import { Roles } from "src/modules/auth/guards/userRoles.decorator";
import { roles } from "src/shared/constants/roles";
import { RolesGuard } from "src/modules/auth/guards/roles.guards";
@ApiTags('categorys')
@Controller('categorys')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService){}

  @ApiBearerAuth()
  @Post()
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateCategoryBodyDTO) {
    const category = await this.categoryService.create(dto);
    return instanceToInstance(category);
  }
  
  @ApiBearerAuth()
  @Get(':id')
  @Roles(roles.ADMIN, roles.BASIC)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
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
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() updateCategoryBodyDTO: UpdateCategoryBodyDTO) {
    await this.categoryService.update( updateCategoryBodyDTO);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id')id: string){
    return await this.categoryService.remove(id);
  }  
}
