import { Controller, Get, Param } from '@nestjs/common';
import { CalculationsService } from './calculations.service';

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly calculationsService: CalculationsService) {}

  @Get('power/:number')
  calculatePower(@Param('number') number: string) {
    return this.calculationsService.calculatePower(number);
  }
}
