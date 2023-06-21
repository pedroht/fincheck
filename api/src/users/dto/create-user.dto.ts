import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: 'Campo nome é obrigatório',
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: 'Campo email é obrigatório',
  })
  @IsEmail({}, { message: 'Necessário informar um email válido' })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: 'Campo senha é obrigatório',
  })
  @MinLength(8, {
    message: 'Campo senha deve ter no mínimo 8 caracteres',
  })
  password: string;
}
