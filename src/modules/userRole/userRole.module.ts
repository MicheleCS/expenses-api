import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { UserRoleController } from "./contexts/controller";
import { UserRoleService } from "./contexts/service";

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleRepository])],
  controllers:[UserRoleController],
  providers: [UserRoleService],
  exports: [UserRoleService]
})
export class UserRoleModule {}