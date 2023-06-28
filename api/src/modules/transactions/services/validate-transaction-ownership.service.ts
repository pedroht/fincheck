import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositores';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(private readonly transactionsRepo: TransactionsRepository) {}

  async execute(userId: string, transactionId: string) {
    const isOwner = await this.transactionsRepo.findFirst({
      where: { userId, id: transactionId },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction not found');
    }

    return true;
  }
}
