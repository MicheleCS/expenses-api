import { Body, Controller, Delete, Get, HttpCode, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserRoleService } from "./service";

@ApiTags('userRoles')
@Controller('userRoles')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService){}

  @ApiBearerAuth()
  @Get(':id')
  @HttpCode(200)
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
  @HttpCode(204)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id')id: string){
    return await this.userRoleService.remove(id);
  }  
}
