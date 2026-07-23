import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CalculationsModule } from './calculations/calculations.module';
import { UsersModule } from './users/users.module';
import { NumbersModule } from './numbers/numbers.module';

@Module({
  imports: [ProductsModule, CalculationsModule, UsersModule, NumbersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// kedengaran kah?
