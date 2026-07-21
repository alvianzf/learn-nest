import { IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  model?: string;

  @IsOptional()
  price?: number;

  @IsOptional()
  modelYear?: number;
}
