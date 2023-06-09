import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserRoleService } from "./service";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guards";
import { CreateUserRoleBodyDTO } from "src/shared/dtos/userRole/createUserRoleBody.dto";
import { instanceToInstance } from "class-transformer";
import { Roles } from "src/modules/auth/guards/userRoles.decorator";
import { roles } from "src/shared/constants/roles";

@ApiTags('user-roles')
@Controller('user-roles')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService){}

  @ApiBearerAuth()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateUserRoleBodyDTO) {
    const userRole = await this.userRoleService.create(dto);
    console.log(userRole)
    return instanceToInstance(userRole);
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
    return await this.userRoleService.findOne(id);
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
    return await this.userRoleService.remove(id);
  }  
}
