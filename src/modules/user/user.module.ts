import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./contexts/service";
import { UserController } from "./contexts/controller";
import { UserRepository } from "src/shared/repositories/user.repository";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserRoleRepository])],
  controllers:[UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}