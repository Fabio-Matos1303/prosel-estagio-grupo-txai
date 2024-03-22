import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from 'src/modules/product/dto/create-product.dto';

export class CreateUserDto {
  @ApiProperty({
    description: 'User ID',
  })
  id?: string;

  @ApiProperty({
    description: 'User name',
  })
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name must be at least 3 characters' })
  name: string;

  @ApiProperty({
    description: 'User email',
  })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @ApiProperty({
    description: 'User password',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @MaxLength(16, { message: 'Password must be less than 16 characters' })
  password: string;

  @ApiProperty({
    description: 'User role',
  })
  @IsNotEmpty({ message: 'Role is required' })
  userRole: role;

  @ApiProperty({
    description: 'User products',
    type: [CreateProductDto],
  })
  products: CreateProductDto[];
}
