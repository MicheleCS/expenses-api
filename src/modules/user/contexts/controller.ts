import { Body, Controller, Delete, Get, HttpCode, Param, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UpdateUserBodyDTO } from "src/shared/dtos/user/updateUserBody.dto";

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService){}

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
