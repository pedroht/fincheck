import { Injectable } from '@nestjs/common';

import { CreateCategoryDto } from 'src/modules/categories/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/modules/categories/dto/update-category.dto';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findManyByUserId(userId: string) {
    return this.prismaService.category.findMany({
      where: { userId },
    });
  }

  findFirst(findFirstDto: Prisma.CategoryFindFirstArgs) {
    return this.prismaService.category.findFirst(findFirstDto);
  }

  create(userId: string, createDto: CreateCategoryDto) {
    const { icon, name, type } = createDto;

    return this.prismaService.category.create({
      data: {
        userId,
        icon,
        name,
        type,
      },
    });
  }

  update(categoryId: string, updateDto: UpdateCategoryDto) {
    const { icon, name, type } = updateDto;

    return this.prismaService.category.update({
      where: { id: categoryId },
      data: {
        icon,
        name,
        type,
      },
    });
  }

  delete(categoryId: string) {
    return this.prismaService.category.delete({
      where: { id: categoryId },
    });
  }
}
