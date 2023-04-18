import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Expense } from "src/shared/database/entities/expense.entity";
import { CreateExpenseBodyDTO } from "src/shared/dtos/expense/createExpensesBody.dto";
import { UpdateExpenseBodyDTO } from "src/shared/dtos/expense/updateExpenseBody.dto";
import { SendEmailProvider } from "src/shared/providers/email/email.provider";
import { ExpenseRepository } from "src/shared/repositories/expense.repository";
import { UserRepository } from "src/shared/repositories/user.repository";
import { EntityNotFoundError } from "typeorm";

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(ExpenseRepository)
    private repository: ExpenseRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ){}

  async create(dto: CreateExpenseBodyDTO) {
    const createdExpense = await this.repository.createExpense(dto);
    const user = await this.userRepository.getOneUser(dto.userId)
    const emailSubject = 'Nova despesa cadastrada';
    const emailText = `Uma nova despesa no valor de R$ ${createdExpense.value} foi cadastrada na data ${createdExpense.createdAt}.`;
    const sendEmail = new SendEmailProvider()
    await sendEmail.execute(user.email, emailSubject, emailText);

    return createdExpense;
  }

  async findAll() {
    return this.repository.getAllExpense();
  }

  async findOne(id: string) {
    return await this.repository.getOneExpense(id);
  }

  async update( dto: UpdateExpenseBodyDTO): Promise<void> {
    const findedExpense = await this.repository.getOneExpense(dto.id)
    if(!findedExpense) {
      throw new EntityNotFoundError(Expense, dto.id)
    }

    await this.repository.updateExpense(dto.id, {
      ...dto,
    })
  }

  async remove(id: string) {
    await this.repository.deleteExpense(id);
  }
}
