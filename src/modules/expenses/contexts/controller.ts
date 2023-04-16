import { Body, Controller, Delete, Get, HttpCode, Param, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ExpenseService } from "./service";
import { UpdateExpenseBodyDTO } from "src/shared/dtos/expense/updateExpenseBody.dto";

@ApiTags('expense')
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService){}

  @ApiBearerAuth()
  @Get(':id')
  @HttpCode(200)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findOne(@Param('id') id:string) {
    return await this.expenseService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch()
  @HttpCode(204)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() expenseId: string, updateExpenseBodyDTO: UpdateExpenseBodyDTO) {
    await this.expenseService.update(expenseId, updateExpenseBodyDTO);
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
    return await this.expenseService.remove(id);
  }  
}
