import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CategoryType } from '../entities/Category';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(CategoryType)
  type: CategoryType;
}
