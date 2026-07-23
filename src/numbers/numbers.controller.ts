import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumbersDto } from './dto/create-numbers.dto';
import { NoEvenNumbersDto } from './dto/noeven-numbers.dto';

@Controller('numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Get()
  getAllNumber() {
    return this.numbersService.getAllNumber();
  }

  @Get(':id')
  getOneNumber(@Param('id', ParseIntPipe) id: number): NoEvenNumbersDto {
    return this.numbersService.getOneNumber(id);
  }

  @Get('even-odd/:num')
  getEvenOdd(@Param('num', ParseIntPipe) num: number) {
    return this.numbersService.getEvenOdd(num);
  }

  @Get('check-num/:id')
  checkNumber(@Param('id', ParseIntPipe) num: number) {
    return this.numbersService.checkNumber(num);
  }

  @Post()
  createNumber(@Body() dto: CreateNumbersDto) {
    return this.numbersService.createNumber(dto);
  }
}
