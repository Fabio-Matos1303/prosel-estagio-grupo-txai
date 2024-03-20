/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: Prisma.ProductCreateInput) {
    const product = await this.prisma.product.create({
      data
    });

    return product;
  }

  async findAll() {
    const product = await this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        priceSale: true,
        quantity: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {
          select: {
            name: true
          }
        }
      },
    });

    return product;
  }

  async findOne(id: string) {
    const productExists = await this.prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!productExists) {
      throw new Error('Product not found');
    }

    const product = await this.prisma.product.findUnique({
      where: {
        id
      }
    });

    return product;
  }

  async update(id: string, data: Prisma.ProductUpdateInput) {
    const productExists = await this.prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!productExists) {
      throw new Error('Product not found');
    }

    const product = await this.prisma.product.update({
      where: {
        id
      },
      data
    });

    return product;
  }

  async remove(id: string) {
    const productExists = await this.prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!productExists) {
      throw new Error('Product not found');
    }

    return await this.prisma.product.delete({
      where: {
        id
      }
    })
  }
}
