import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "src/shared/repositories/user.repository";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";
import { Module } from "@nestjs/common";
import { JwtAuthGuard } from "./guards/jwt.auth.guards";
import { LoginService } from "./contexts/login.service";
import { LoginController } from "./contexts/login.controller";
import { RolesGuard } from "./guards/roles.guards";

@Module({
  imports: [
    UserModule, 
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5d' },
    }),
    TypeOrmModule.forFeature([UserRepository, UserRoleRepository])
  ],
  controllers:[LoginController],
  providers: [
    LoginService, 
    LocalStrategy, 
    JwtStrategy,
    JwtAuthGuard,
    RolesGuard,
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [LoginService],
  
})
export class AuthModule {}