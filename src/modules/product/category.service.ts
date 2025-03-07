import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './repository/category.repository';
import { Categoria } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async listarCategorias(): Promise<Categoria[]> {
    try {
      return await this.categoryRepository.findAll();
    } catch (error) {
      console.error('Error obteniendo categorías:', error);
      throw new Error('No se pudieron obtener las categorías');
    }
  }

  async crearCategoria(nombre: string): Promise<Categoria> {
    try {
      return await this.categoryRepository.create({ Nombre: nombre });
    } catch (error) {
      console.error('Error creando categoría:', error);
      throw new Error('No se pudo crear la categoría');
    }
  }
}
