import { Injectable } from '@nestjs/common';
import { PrismaClient, Categoria } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CategoryRepository {
  async findAll(): Promise<Categoria[]> {
    try {
      return await prisma.categoria.findMany();
    } catch (error) {
      console.error('Error obteniendo categorías:', error);
      throw new Error('No se pudieron obtener las categorías');
    }
  }

  async create(data: { Nombre: string }): Promise<Categoria> {
    try {
      return await prisma.categoria.create({ data });
    } catch (error) {
      console.error('Error creando categoría:', error);
      throw new Error('No se pudo crear la categoría');
    }
  }
}
