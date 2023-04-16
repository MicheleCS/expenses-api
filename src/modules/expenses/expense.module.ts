import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpenseRepository } from "src/shared/repositories/expense.repository";
import { ExpenseController } from "./contexts/controller";
import { ExpenseService } from "./contexts/service";

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseRepository])],
  controllers:[ExpenseController],
  providers: [ExpenseService],
  exports: [ExpenseService]
})
export class ExpenseModule {}