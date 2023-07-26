import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';
import { ValidateCategoryOwnershipService } from './validate-category-ownership.service';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepo: CategoriesRepository,
    private readonly validateCategoryOwnershipService: ValidateCategoryOwnershipService,
  ) {}

  findAllByUserId(userId: string) {
    return this.categoryRepo.findManyByUserId(userId);
  }

  async findOne(userId: string, categoryId: string) {
    await this.validateCategoryOwnershipService.execute(userId, categoryId);

    return this.categoryRepo.findFirst({
      where: { id: categoryId },
    });
  }

  async create(userId: string, createCategoryDto: CreateCategoryDto) {
    const { icon, name, type } = createCategoryDto;

    return this.categoryRepo.create(userId, { icon, name, type });
  }

  async update(
    userId: string,
    categoryId: string,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    const { icon, name, type } = updateCategoryDto;

    await this.validateCategoryOwnershipService.execute(userId, categoryId);

    return this.categoryRepo.update(categoryId, { icon, name, type });
  }

  async remove(userId: string, categoryId: string) {
    await this.validateCategoryOwnershipService.execute(userId, categoryId);

    await this.categoryRepo.delete(categoryId);
  }
}
