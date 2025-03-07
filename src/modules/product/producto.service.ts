import { Injectable } from '@nestjs/common';
import { ProductRepository } from './repository/product.repository';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async listarProductos(): Promise<Producto[]> {
    try {
      return await this.productRepository.findAll();
    } catch (error) {
      console.error('Error obteniendo productos:', error);
      throw new Error('No se pudieron obtener los productos');
    }
  }

  async obtenerProductoPorId(id: number): Promise<Producto | null> {
    try {
      return await this.productRepository.findById(id);
    } catch (error) {
      console.error(`Error obteniendo producto con ID ${id}:`, error);
      throw new Error('No se pudo obtener el producto');
    }
  }

  async crearProducto(data: CreateProductoDto): Promise<Producto> {
    try {
      return await this.productRepository.create({
        Nombre: data.Nombre,
        Precio: data.Precio,
        CategoriaID: data.categoriaId, // ✅ Prisma espera "CategoriaID" según el schema
      });
    } catch (error) {
      console.error('Error creando producto:', error);
      throw new Error('No se pudo crear el producto');
    }
  }

  async actualizarProducto(
    id: number,
    data: UpdateProductoDto,
  ): Promise<Producto> {
    try {
      return await this.productRepository.updateById(id, {
        Nombre: data.Nombre,
        Precio: data.Precio,
        CategoriaID: data.categoriaId, // ✅ Mantiene la relación con la categoría
      });
    } catch (error) {
      console.error(`Error actualizando producto con ID ${id}:`, error);
      throw new Error('No se pudo actualizar el producto');
    }
  }

  async eliminarProducto(id: number): Promise<void> {
    try {
      await this.productRepository.deleteById(id);
    } catch (error) {
      console.error(`Error eliminando producto con ID ${id}:`, error);
      throw new Error('No se pudo eliminar el producto');
    }
  }
}
