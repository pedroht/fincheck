import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, NotEquals, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty({
    message: 'JWT_SECRET não pode estar vazio',
  })
  @NotEquals('unsecure_jwt_secret', {
    message: 'JWT_SECRET não pode ser igual a unsecure_jwt_secret',
  })
  jwtSecret: string;

  @IsString()
  @IsNotEmpty({
    message: 'DATABASE_URL não pode estar vazio',
  })
  dbURL: string;
}

export const env: Env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  dbURL: process.env.DATABASE_URL,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
