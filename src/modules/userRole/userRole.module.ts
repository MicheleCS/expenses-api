import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { UserRoleController } from "./contexts/controller";
import { UserRoleService } from "./contexts/service";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";
import { UserRepository } from "src/shared/repositories/user.repository";
import { RoleRepository } from "src/shared/repositories/role.repository";

@Module({
  imports: [TypeOrmModule.forFeature([
    UserRoleRepository,
    UserRepository,
    RoleRepository,
  ])],
  controllers:[UserRoleController],
  providers: [UserRoleService, { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [UserRoleService]
})
export class UserRoleModule {}