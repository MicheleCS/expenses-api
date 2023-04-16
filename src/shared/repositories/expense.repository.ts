import { EntityRepository, Repository, getRepository } from "typeorm";
import { Expense } from "../database/entities/expense.entity";
import { CreateExpenseDTO } from "../dtos/expense/createExpense.dto";
import { UpdateExpenseDTO } from "../dtos/expense/updateExpense.dto";

@EntityRepository(Expense)
export class ExpenseRepository extends Repository<Expense> {
  private ormRepository: Repository<Expense>;

    constructor(){
      super();
      this.ormRepository = getRepository(Expense);
    }

  async createExpense(dto: CreateExpenseDTO): Promise<Expense> {
    const expense = this.create(dto);
    return await this.save(expense)
  }

  async getAllExpense(): Promise<Expense[]> {
    return this.find();
  }

  async getOneExpense(id: string): Promise<Expense | undefined> {
    return await this.findOne({id});
  }

  async updateExpense(id: string, dto: UpdateExpenseDTO): Promise<void> {
    await this.update(id, dto);
  }

  async deleteExpense(id: string): Promise<void> {
    await this.delete(id);
  }
}
