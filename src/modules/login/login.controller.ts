/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post()
  async login(@Body() createLoginDto: LoginDto) {
    return await this.loginService.login(createLoginDto);
  }
}
