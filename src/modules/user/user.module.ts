import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./contexts/service";
import { UserController } from "./contexts/controller";
import { UserRepository } from "src/shared/repositories/user.repository";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserRoleRepository])],
  controllers:[UserController],
  providers: [UserService, { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [UserService]
})
export class UserModule {}