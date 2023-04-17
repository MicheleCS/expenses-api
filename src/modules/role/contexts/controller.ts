import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RoleService } from "./service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateRoleBodyDTO } from "src/shared/dtos/role/createRoleBodyDTO";
import { instanceToInstance } from "class-transformer";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guards";
import { Roles } from "src/modules/auth/guards/userRoles.decorator";
import { roles } from "src/shared/constants/roles";

@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly RoleService: RoleService){}

  @ApiBearerAuth()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateRoleBodyDTO) {
    const Role = await this.RoleService.create(dto);
    console.log(Role)
    return instanceToInstance(Role);
  }

  @ApiBearerAuth()
  @Get(':id')
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findOne(@Param('id') id:string) {
    return await this.RoleService.findOne(id);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @Roles(roles.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id')id: string){
    return await this.RoleService.remove(id);
  }  
}
