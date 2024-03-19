import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNotEmpty({ message: 'Id is required' })
  @IsString({ message: 'Id is required' })
  readonly id: string;
}
