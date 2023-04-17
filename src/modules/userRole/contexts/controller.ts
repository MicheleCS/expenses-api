import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserRoleService } from "./service";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guards";
import { CreateUserRoleBodyDTO } from "src/shared/dtos/userRole/createUserRoleBody.dto";
import { instanceToInstance } from "class-transformer";
import { userRole } from "src/shared/constants/userRole";
import { UserRole } from "src/modules/auth/guards/userRoles.decorator";
@ApiTags('userRoles')
@Controller('userRoles')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService){}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateUserRoleBodyDTO) {
    const role = await this.userRoleService.create(dto);
    return instanceToInstance(role);
  }

  @ApiBearerAuth()
  @Get(':id')
  @UserRole(userRole.ADMIN)
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
  @UserRole(userRole.ADMIN)
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
