import { Module } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { NumbersController } from './numbers.controller';
import { NumbersRepository } from './numbers.repository';

@Module({
  controllers: [NumbersController],
  providers: [NumbersService, NumbersRepository],
})
export class NumbersModule {}
