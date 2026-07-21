import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

export interface Product extends CreateProductDto {
  id: number;
}

@Injectable()
export class ProductsRepository {
  // Refactoring

  private products: Product[] = [
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
  private nextId = 5;

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  createProduct(dto: CreateProductDto): Product {
    const product: Product = { ...dto, id: this.nextId++ };
    this.products.push(product);
    return product;
  }

  updateProduct(id: number, dto: UpdateProductDto): Product | undefined {
    const product = this.getProductById(id);

    if (!product) {
      return undefined;
    }

    Object.assign(product, dto);
    return product;
  }
}
