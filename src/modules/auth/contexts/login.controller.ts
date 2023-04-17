import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "../guards/local.auth.guards";
import { LoginDTO } from "src/shared/dtos/auth/loginBody.dto";
import { LoginService } from "./login.service";
@Controller('auth')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post()
  async login(@Body() loginDTO: LoginDTO) {
    return await this.loginService.login(loginDTO);
  }
}
