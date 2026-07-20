import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Get()
  // getAllProducts() {
  //   return this.productsService.getAllProducts();
  // }

  @Get(':productName')
  getProductByName(@Param('productName') productName: string) {
    //pakai garing
    return this.productsService.getProductByName(productName);
  }

  @Get()
  getAllProductsByQuery(
    // pakai ? dan &
    @Query('name') productName: string,
    @Query('model') productModel: string,
    @Query('price') productPrice: string,
    @Query('discount') productDiscount: string,
  ) {
    return this.productsService.getAllProductsByQuery(
      productName,
      productModel,
      productPrice,
      productDiscount,
    );
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }
}
