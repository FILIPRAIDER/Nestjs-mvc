import { Injectable } from '@nestjs/common';
import { PrismaClient, Producto } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductRepository {
  async findAll(): Promise<Producto[]> {
    return prisma.producto.findMany({
      include: {
        categoria: true, // 🔥 Esto traerá el objeto completo de la categoría
      },
    });
  }

  async findById(id: number): Promise<Producto | null> {
    return prisma.producto.findUnique({
      where: { ID: id },
      include: { categoria: true },
    });
  }

  async create(data: {
    Nombre: string;
    Precio: number;
    CategoriaID: number;
  }): Promise<Producto> {
    return prisma.producto.create({
      data: {
        Nombre: data.Nombre,
        Precio: data.Precio,
        CategoriaID: data.CategoriaID, // ✅ Usa el nombre correcto
      },
    });
  }

  async updateById(
    id: number,
    data: { Nombre?: string; Precio?: number; CategoriaID?: number },
  ): Promise<Producto> {
    return prisma.producto.update({
      where: { ID: id },
      data: {
        Nombre: data.Nombre,
        Precio: data.Precio,
        CategoriaID: data.CategoriaID, // ✅ Usa el nombre correcto
      },
    });
  }

  async deleteById(id: number): Promise<Producto> {
    return prisma.producto.delete({ where: { ID: id } });
  }
}
