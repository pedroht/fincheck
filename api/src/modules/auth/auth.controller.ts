import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { SignupDTO } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  authenticate(@Body() authenticateDto: AuthenticateDTO) {
    return this.authService.authenticate(authenticateDto);
  }

  @Post('signup')
  create(@Body() signupDTO: SignupDTO) {
    return this.authService.signup(signupDTO);
  }
}
