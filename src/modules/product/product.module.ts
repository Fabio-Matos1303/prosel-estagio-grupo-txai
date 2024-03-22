/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, CreateProductDto],
})
export class ProductModule { }
