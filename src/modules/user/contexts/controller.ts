import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UpdateUserBodyDTO } from "src/shared/dtos/user/updateUserBody.dto";
import { CreateUserBodyDTO } from "src/shared/dtos/user/createUserBody.dto";
import { instanceToInstance } from "class-transformer";

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
  
  @ApiBearerAuth()
  @Get(':id')
  @HttpCode(200)
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
  @HttpCode(204)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() userId: string, updateUserBodyDTO: UpdateUserBodyDTO) {
    await this.userService.update(userId, updateUserBodyDTO);
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
    return await this.userService.remove(id);
  }  
}
