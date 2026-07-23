import { Injectable } from '@nestjs/common';
import { NumberType } from '../types/numbers.type';
import { CreateNumbersDto } from './dto/create-numbers.dto';

@Injectable()
export class NumbersRepository {
  private numbers: NumberType[] = [
    {
      id: 1,
      value: 19,
      isEven: false,
    },
    {
      id: 2,
      value: 20,
      isEven: true,
    },
    {
      id: 3,
      value: 33,
      isEven: false,
    },
    {
      id: 4,
      value: 40,
      isEven: true,
    },
  ];

  private nextId = 5;

  getAllNumber() {
    return this.numbers;
  }

  getOneNumber(id: number) {
    return this.numbers.find((number) => number.id === id);
  }

  createNumber(dto: CreateNumbersDto): NumberType {
    const number = { ...dto, id: this.nextId++ };

    this.numbers.push(number);
    return number;
  }
}
