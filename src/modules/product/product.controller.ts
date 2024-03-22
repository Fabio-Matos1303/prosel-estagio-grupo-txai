/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  async create(@Body() data: Prisma.ProductCreateInput) {
    return await this.productService.create(data);
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('user/:userId')
  findProductsByUser(@Param('userId') userId: string) {
    return this.productService.findProductsByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.ProductUpdateInput) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
