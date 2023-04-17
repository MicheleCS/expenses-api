import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleRepository } from "src/shared/repositories/role.repository";
import { RoleController } from "./contexts/controller";
import { RoleService } from "./contexts/service";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  controllers:[RoleController],
  providers: [RoleService, { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [RoleService]
})
export class RoleModule {}