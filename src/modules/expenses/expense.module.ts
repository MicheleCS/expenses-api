import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpenseRepository } from "src/shared/repositories/expense.repository";
import { ExpenseController } from "./contexts/controller";
import { ExpenseService } from "./contexts/service";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";
import { UserRepository } from "src/shared/repositories/user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([
    ExpenseRepository,
    UserRepository
  ])],
  controllers:[ExpenseController],
  providers: [ExpenseService,
    { provide: 'ENCRYPT_PROVIDER', 
    useClass: BcryptProvider
  }],
  exports: [ExpenseService]
})
export class ExpenseModule {}