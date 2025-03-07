import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categorias')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.listarCategorias();
  }

  @Post()
  create(@Body() body: { Nombre: string }) {
    return this.categoryService.crearCategoria(body.Nombre);
  }
}
