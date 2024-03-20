import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { role } from '@prisma/client';

export class CreateUserDto {
  id?: string;

  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name must be at least 3 characters' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @MaxLength(16, { message: 'Password must be less than 16 characters' })
  password: string;

  @IsNotEmpty({ message: 'Role is required' })
  userRole: role;
  products: string[];
}
