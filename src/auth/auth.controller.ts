import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern("register")
  register(@Payload() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @MessagePattern("login")
  login(@Payload() loginDto: LoginDto) {
    return loginDto;
  }

  @MessagePattern("verify-token")
  verifyToken() {
    return "checking token...";
  }
}
