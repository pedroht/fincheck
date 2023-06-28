import { Body, Controller, Post } from '@nestjs/common';
import { SigninDTO } from './dto/signin.dto';
import { SignupDTO } from './dto/signup.dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  authenticate(@Body() signinDto: SigninDTO) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  create(@Body() signupDTO: SignupDTO) {
    return this.authService.signup(signupDTO);
  }
}
