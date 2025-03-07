import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryRepository } from './repository/category.repository';
import { CategoryController } from './category.controller';

@Module({
  providers: [CategoryService, CategoryRepository],
  controllers: [CategoryController],
  exports: [CategoryService], // Permite su uso en otros módulos
})
export class CategoryModule {}
