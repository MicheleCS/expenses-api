import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "src/shared/repositories/user.repository";
import { UserRoleRepository } from "src/shared/repositories/userRole.repository";
import { AuthController } from "./contexts/login.controller";
import { AuthService } from "./contexts/login.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { BcryptProvider } from "src/shared/providers/encrypt/bcrypt.provider";
import { Module } from "@nestjs/common";
import { JwtAuthGuard } from "./guards/jwt.auth.guards";

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
  controllers:[AuthController],
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy,
    JwtAuthGuard,
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [AuthService],
  
})
export class AuthModule {}