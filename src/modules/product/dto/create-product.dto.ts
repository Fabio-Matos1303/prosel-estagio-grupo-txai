import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product id',
  })
  id?: string;

  @ApiProperty({
    description: 'Product name',
  })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2, allowInfinity: false, allowNaN: false })
  @ApiProperty({
    description: 'Product price',
  })
  priceSale: number;

  @ApiProperty({
    description: 'Product quantity',
  })
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 0, allowInfinity: false, allowNaN: false })
  quantity: number;
}
