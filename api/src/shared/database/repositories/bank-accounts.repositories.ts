import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';
import { CreateBankAccountDto } from 'src/modules/bank-accounts/dto/create-bank-account.dto';
import { UpdateBankAccountDto } from 'src/modules/bank-accounts/dto/update-bank-account.dto';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(userId: string, createDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createDto;

    return this.prismaService.bankAccount.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  findMany(userId: string) {
    return this.prismaService.bankAccount.findMany({
      where: { userId },
      include: {
        transactions: {
          select: {
            value: true,
            type: true,
          },
        },
      },
    });
  }

  findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstDto);
  }

  update(bankAccountId: string, updateDto: UpdateBankAccountDto) {
    const { color, initialBalance, name, type } = updateDto;

    return this.prismaService.bankAccount.update({
      where: { id: bankAccountId },
      data: {
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  delete(bankAccountId: string) {
    return this.prismaService.bankAccount.delete({
      where: { id: bankAccountId },
    });
  }
}
