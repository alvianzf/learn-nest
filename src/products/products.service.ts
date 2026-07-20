import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  createProduct(createProductDto: CreateProductDto) {
    return `This action adds a new product with name ${createProductDto.name}, model ${createProductDto.model}, price ${createProductDto.price}, and model year ${createProductDto.modelYear}`;
  }

  getAllProducts() {
    return 'This is products from services';
  }

  getProductByName(productName: string) {
    return `This is product ${productName} from services`;
  }

  getAllProductsByQuery(
    productName: string = 'komputer',
    productModel: string = 'HP',
    productPrice: string = '1000000',
    productDiscount: string = '0',
  ) {
    const numPrice = parseInt(productPrice);
    const numDiscount = parseInt(productDiscount);

    const totalPay = numPrice - (numPrice * numDiscount) / 100;

    return `This is product ${productName} with model ${productModel} and total Pay ${totalPay} from services`;
  }
}
