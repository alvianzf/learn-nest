import { PartialType } from '@nestjs/mapped-types';
import { CreateNumbersDto } from './create-numbers.dto';

export class UpdateNumbersDto extends PartialType(CreateNumbersDto) {}
