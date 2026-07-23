import { IsBoolean, IsNumber, Min } from 'class-validator';

export class CreateNumbersDto {
  @IsNumber()
  @Min(-100)
  value: number;

  @IsBoolean()
  isEven: boolean;
}
