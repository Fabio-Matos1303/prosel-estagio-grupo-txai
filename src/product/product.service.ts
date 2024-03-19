import { Injectable } from '@nestjs/common';
import { ProductReposity } from './repository/product_repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductReposity) { }

  getProducts() {
    return this.productRepository.getProducts();
  }
}
