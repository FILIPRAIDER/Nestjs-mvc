import { Module } from '@nestjs/common';
import { ProductModule } from './product/producto.module';
import { CategoryModule } from './product/category.module';

@Module({
  imports: [ProductModule, CategoryModule], // ✅ Se agregan ambos módulos
})
export class AppModule {}
