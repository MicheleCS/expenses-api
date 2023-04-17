import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./login.service";
import { LocalAuthGuard } from "../guards/local.auth.guards";
import { LoginDTO } from "src/shared/dtos/auth/loginBody.dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    return await this.authService.login(loginDTO);
  }
}