import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email address',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty({ message: 'password is required' })
  @IsString({ message: 'password must have valid characters' })
  @MinLength(8, { message: 'password must be between 8 and 16 characters' })
  @MaxLength(16, { message: 'password must be between 8 and 16 characters' })
  password: string;
}
