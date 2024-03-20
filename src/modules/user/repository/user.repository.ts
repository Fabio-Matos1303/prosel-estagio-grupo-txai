import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Injectable } from '@nestjs/common';

/* eslint-disable prettier/prettier */
@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        userRole: true,
        products: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async findById(id: string) {
    return await this.prisma.user.findFirstOrThrow({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        userRole: true,
        products: {
          select: {
            name: true
          }
        }
      }
    })
  }

  async create(createUserDTO: CreateUserDto) {
    return await this.prisma.user.create({
      select: {
        id: true,
        name: true,
        email: true
      },
      data: {
        email: createUserDTO.email,
        name: createUserDTO.name,
        password: createUserDTO.password,
        userRole: createUserDTO.userRole
      }
    })
  }

  async update(id: string, updateUserDTO: UpdateUserDto) {
    return await this.prisma.user.update({
      select: {
        id: true
      },
      where: {
        id
      },
      data: {
        email: updateUserDTO.email,
        name: updateUserDTO.name,
        password: updateUserDTO.password,
        userRole: updateUserDTO.userRole,
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      select: {
        id: true
      },
      where: {
        id
      }
    })
  }
}
