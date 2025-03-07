import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.listarProductos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.obtenerProductoPorId(Number(id)); // ✅ Usa el nombre corregido
  }

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productService.crearProducto(createProductoDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productService.actualizarProducto(
      Number(id),
      updateProductoDto,
    ); // ✅ Usa el nombre corregido
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.eliminarProducto(Number(id));
  }
}
