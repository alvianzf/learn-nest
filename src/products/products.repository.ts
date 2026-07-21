import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsRepository {
  // Refactoring

  private products: CreateProductDto[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      model: 'WM-100',
      price: 150000,
      modelYear: 2023,
    },
    {
      id: 2,
      name: 'Bluetooth Headphones',
      model: 'BH-200',
      price: 599900,
      modelYear: 2024,
    },
    {
      id: 3,
      name: 'Gaming Keyboard',
      model: 'GK-300',
      price: 899900,
      modelYear: 2024,
    },
    {
      id: 4,
      name: 'USB-C Charger',
      model: 'UC-50',
      price: 249900,
      modelYear: 2023,
    },
  ];
  private nextId = 4;

  getAllProducts(): CreateProductDto[] {
    return this.products;
  }
}
