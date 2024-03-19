import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Post()
  async createProduct(@Body() createProductDTO:) {


  }
}
