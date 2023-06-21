import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const emailTaken = await this.prismaService.user.findUnique({
      where: { email: email },
      select: { id: true },
    });

    if (emailTaken) {
      // status code 409
      throw new ConflictException('Este email já esta em uso');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.prismaService.user.create({
      data: {
        name: createUserDto.name,
        email,
        password: hashedPassword,
      },
    });

    return {
      name: user.name,
      email: user.email,
    };
  }
}
