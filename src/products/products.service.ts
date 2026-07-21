import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  getAllProducts(): Product[] {
    return this.productsRepository.getAllProducts();
  }

  getProductById(id: string): Product {
    const product = this.productsRepository.getProductById(parseInt(id, 10));

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  createProduct(dto: CreateProductDto): Product {
    return this.productsRepository.createProduct(dto);
  }

  updateProduct(id: string, dto: UpdateProductDto): Product {
    const updatedProduct = this.productsRepository.updateProduct(
      parseInt(id, 10),
      dto,
    );

    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }

    return updatedProduct;
  }
}
