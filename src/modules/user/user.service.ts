/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: Prisma.UserCreateInput) {
    const user = await this.prisma.user.create({
      data
    });

    return user;
  }

  async findAll() {
    const user = await this.prisma.user.findMany();

    return user;
  }

  async findOne(id: string) {
    const bookExists = await this.prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!bookExists) {
      throw new Error('Book not found');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });

    return user;
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const bookExists = await this.prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!bookExists) {
      throw new Error('Book not found');
    }

    const user = await this.prisma.user.update({
      where: {
        id
      },
      data
    });

    return user;
  }

  async remove(id: string) {
    const bookExists = await this.prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!bookExists) {
      throw new Error('Book not found');
    }

    return await this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}
