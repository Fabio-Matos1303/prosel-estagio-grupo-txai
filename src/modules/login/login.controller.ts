/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUnauthorizedResponse({
  description: 'Unauthorized - Usuário não autorizado',
})
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @ApiResponse({
    status: 200,
    description: 'Sucesso.',
  })
  @ApiResponse({
    status: 409,
    description:
      'Conflit - A senha deve conter 8 caracteres no mínimo. / O email está inválido.',
  })
  @ApiNotFoundResponse({
    description: 'NotFound - Usuário não encontrado.',
  })
  @HttpCode(200)
  @ApiOperation({ summary: 'Login do usuário' })
  @Post()
  async login(@Body() createLoginDto: LoginDto) {
    return await this.loginService.login(createLoginDto);
  }
}
