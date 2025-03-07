import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  Nombre?: string;

  @IsOptional()
  @Type(() => Number) // ✅ Convierte a número de manera segura
  Precio?: number;

  @IsOptional()
  @Type(() => Number) // ✅ Convierte a número correctamente
  categoriaId?: number;
}
