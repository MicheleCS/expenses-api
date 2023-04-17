import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ExpenseService } from "./service";
import { UpdateExpenseBodyDTO } from "src/shared/dtos/expense/updateExpenseBody.dto";
import { UserRole } from "src/modules/auth/guards/userRoles.decorator";
import { userRole } from "src/shared/constants/userRole";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guards";
import { CreateExpenseBodyDTO } from "src/shared/dtos/expense/createExpensesBody.dto";
import { instanceToInstance } from "class-transformer";
import { Expense } from "src/shared/database/entities/expense.entity";

@ApiTags('expense')
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService){}


  @ApiBearerAuth()
  @Post()
  @UserRole(userRole.ADMIN, userRole.BASIC)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateExpenseBodyDTO) {
    const expense = await this.expenseService.create(dto);
    return instanceToInstance(Expense);
  }

  @ApiBearerAuth()
  @Get(':id')
  @UserRole(userRole.BASIC, userRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
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
  @UserRole(userRole.ADMIN, userRole.BASIC)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
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
  @UserRole(userRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id')id: string){
    return await this.expenseService.remove(id);
  }  
}
