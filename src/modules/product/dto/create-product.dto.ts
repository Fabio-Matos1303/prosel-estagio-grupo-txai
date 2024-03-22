import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product id',
  })
  id?: string;

  @ApiProperty({
    description: 'Product name',
  })
  name: string;

  @ApiProperty({
    description: 'Product price',
  })
  priceSale: number;

  @ApiProperty({
    description: 'Product quantity',
  })
  @ApiProperty()
  quantity: number;
}
