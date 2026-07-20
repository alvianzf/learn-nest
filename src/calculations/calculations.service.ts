import { Injectable } from '@nestjs/common';
import { powerOfNumber } from '../utils/helpers';

@Injectable()
export class CalculationsService {
  calculatePower(number: string): number {
    return powerOfNumber(parseInt(number));
  }
}
