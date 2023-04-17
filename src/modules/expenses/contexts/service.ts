import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Expense } from "src/shared/database/entities/expense.entity";
import { CreateExpenseBodyDTO } from "src/shared/dtos/expense/createExpensesBody.dto";
import { GetAllExpenseBodyDTO } from "src/shared/dtos/expense/gettAllExpenseBody.dto";
import { UpdateExpenseBodyDTO } from "src/shared/dtos/expense/updateExpenseBody.dto";
import { ExpenseRepository } from "src/shared/repositories/expense.repository";
import { EntityNotFoundError } from "typeorm";

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(ExpenseRepository)
    private repository: ExpenseRepository,

  ){}

  async create(dto: CreateExpenseBodyDTO) {
    return this.repository.createExpense(dto);
  }

  async findAll(dto: GetAllExpenseBodyDTO) {
    return this.repository.getAllExpense(dto);
  }

  async findOne(id: string) {
    return await this.repository.getOneExpense(id);
  }

  async update( expenseId: string, dto: UpdateExpenseBodyDTO): Promise<void> {
    const findedExpense = await this.repository.getOneExpense(expenseId)
    if(!findedExpense) {
      throw new EntityNotFoundError(Expense, expenseId)
    }

    await this.repository.updateExpense(expenseId, {
      ...dto,
    })
  }

  async remove(id: string) {
    await this.repository.deleteExpense(id);
  }
}
