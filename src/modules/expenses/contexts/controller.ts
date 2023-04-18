import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ExpenseService } from "./service";
import { UpdateExpenseBodyDTO } from "src/shared/dtos/expense/updateExpenseBody.dto";
import { Roles } from "src/modules/auth/guards/userRoles.decorator";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guards";
import { CreateExpenseBodyDTO } from "src/shared/dtos/expense/createExpensesBody.dto";
import { instanceToInstance } from "class-transformer";
import { roles } from "src/shared/constants/roles";
import { RolesGuard } from "src/modules/auth/guards/roles.guards";

@ApiTags('expenses')
@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService){}

  @ApiBearerAuth()
  @Post()
  @Roles(roles.ADMIN, roles.BASIC)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateExpenseBodyDTO) {
    const expense = await this.expenseService.create(dto);
    return instanceToInstance(expense);
  }

  @Get()
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findAll() {
    return this.expenseService.findAll()
  }

  @ApiBearerAuth()
  @Get(':id')
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
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
  @Roles(roles.ADMIN, roles.BASIC)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body()  updateExpenseBodyDTO: UpdateExpenseBodyDTO) {
    await this.expenseService.update( updateExpenseBodyDTO);
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
    return await this.expenseService.remove(id);
  }  
}
