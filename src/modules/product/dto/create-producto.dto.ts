import { IsString, IsNumber } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  Nombre: string;

  @IsNumber()
  Precio: number;

  @IsNumber()
  categoriaId: number;
}
