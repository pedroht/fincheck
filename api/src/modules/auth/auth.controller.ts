import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { SigninDTO } from './dto/signin.dto';
import { SignupDTO } from './dto/signup.dto';

import { AuthService } from './auth.service';

@Controller('auth')
@SetMetadata('IS_PUBLIC', true)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SigninDTO) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  signup(@Body() signupDTO: SignupDTO) {
    return this.authService.signup(signupDTO);
  }
}
