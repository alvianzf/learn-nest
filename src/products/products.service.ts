import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  getAllProducts(): CreateProductDto[] | undefined {
    return this.productsRepository.getAllProducts();
  }

  getProductById(id: string): CreateProductDto | undefined {
    const productId = parseInt(id);
    return this.productsRepository
      .getAllProducts()
      .find((product) => product.id === productId);
  }

  createProduct(dto: CreateProductDto) {
    return this.productsRepository.getAllProducts().push(dto);
  }

  updateProduct(id: string, dto: UpdateProductDto) {
    // DRY
    // DON'T REPEAT YOURSELF
    const currentData = this.getProductById(id);

    if (!currentData) {
      return new NotFoundException('Product not found');
      // returns 404
    }

    const updatedProduct: UpdateProductDto = Object.assign(currentData, dto);
    return updatedProduct;
  }
}
