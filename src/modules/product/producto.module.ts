import { Module } from '@nestjs/common';
import { ProductService } from './producto.service';
import { ProductController } from './producto.controller';
import { ProductRepository } from './repository/product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository], // ✅ Asegúrate de importar ambos
  exports: [ProductService],
})
export class ProductModule {} // ✅ Asegúrate de usar el nombre correcto
