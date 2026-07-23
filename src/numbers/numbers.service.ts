import { Injectable, NotFoundException } from '@nestjs/common';
import { NumbersRepository } from './numbers.repository';
import { CreateNumbersDto } from './dto/create-numbers.dto';
import { NoEvenNumbersDto } from './dto/noeven-numbers.dto';

@Injectable()
export class NumbersService {
  constructor(private readonly numbersRepository: NumbersRepository) {}

  getAllNumber() {
    return this.numbersRepository.getAllNumber();
  }

  getOneNumber(id: number): NoEvenNumbersDto {
    const number = this.numbersRepository.getOneNumber(id);

    if (!number) {
      throw new NotFoundException('Number not found');
    }

    return number;
  }

  createNumber(dto: CreateNumbersDto) {
    return this.numbersRepository.createNumber(dto);
  }

  getEvenOdd(num: number) {
    if (num % 2 === 0) {
      return 'Genap';
    } else {
      return 'Ganjil';
    }
  }

  checkNumber(id: number) {
    const number = this.numbersRepository.getOneNumber(id);

    if (!number) {
      throw new NotFoundException('Number not found');
    }

    const value = number.value;

    const evenOdd = this.getEvenOdd(value);

    return {
      id: id,
      value: value,
      evenOdd: evenOdd,
    };
  }
}
