import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UpdateUserBodyDTO } from "src/shared/dtos/user/updateUserBody.dto";
import { CreateUserBodyDTO } from "src/shared/dtos/user/createUserBody.dto";
import { instanceToInstance } from "class-transformer";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guards";
import { RolesGuard } from "src/modules/auth/guards/roles.guards";
import { roles } from "src/shared/constants/roles";
import { Roles } from "src/modules/auth/guards/userRoles.decorator";

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateUserBodyDTO) {
    const user = await this.userService.create(dto);
    return instanceToInstance(user);
  }

  @Get()
  @Roles(roles.ADMIN, roles.BASIC)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findAll() {
    return this.userService.findAll();
  }
  
  @ApiBearerAuth()
  @Get(':id')
  @Roles( roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findOne(@Param('id') id:string) {
    return await this.userService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch()
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() updateUserBodyDTO: UpdateUserBodyDTO) {
    await this.userService.update( updateUserBodyDTO);
  }

  @Delete(':id')
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id')id: string){
    return await this.userService.remove(id);
  }  
}
