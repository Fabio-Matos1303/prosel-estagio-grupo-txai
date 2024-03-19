/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: Prisma.ProductCreateInput) {
    const user = await this.prisma.product.create({
      data
    });

    return user;
  }

  async findAll() {
    const user = await this.prisma.product.findMany();

    return user;
  }

  async findOne(id: string) {
    const bookExists = await this.prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!bookExists) {
      throw new Error('Book not found');
    }

    const user = await this.prisma.product.findUnique({
      where: {
        id
      }
    });

    return user;
  }

  async update(id: string, data: Prisma.ProductUpdateInput) {
    const bookExists = await this.prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!bookExists) {
      throw new Error('Book not found');
    }

    const user = await this.prisma.product.update({
      where: {
        id
      },
      data
    });

    return user;
  }

  async remove(id: string) {
    const bookExists = await this.prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!bookExists) {
      throw new Error('Book not found');
    }

    return await this.prisma.product.delete({
      where: {
        id
      }
    })
  }
}
