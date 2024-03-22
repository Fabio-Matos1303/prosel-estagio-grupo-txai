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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/enums/role.enum';
import { ApiBearerAuth, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUnauthorizedResponse({
  description: 'Unauthorized - Usuário não autorizado.',
})
@ApiNotFoundResponse({
  description: 'NotFound - Registro não encontrado.',
})
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiResponse({
    status: 201,
    description: 'Criado.',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict - Um registro com esse nome já existe.',
  })
  @ApiOperation({ summary: 'Cria cadastro' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Sucesso.',
  })
  @ApiNotFoundResponse({
    description: 'NotFound - Registro não encontrado.',
  })
  @ApiOperation({ summary: 'Busca todos os usuários' })
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Sucesso.',
  })
  @ApiNotFoundResponse({
    description: 'NotFound - Registro não encontrado.',
  })
  @ApiOperation({ summary: 'Busca pelo id' })
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @ApiResponse({
    status: 200,
    description: 'Sucesso.',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict - Um registro com esse nome já existe.',
  })
  @ApiNotFoundResponse({
    description: 'NotFound - Registro não encontrado.',
  })
  @ApiOperation({ summary: 'Atualiza cadastro' })
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDto) {
    return this.userService.update(id, updateUserDTO);
  }

  @ApiResponse({
    status: 200,
    description: 'Sucesso.',
  })
  @ApiNotFoundResponse({
    description: 'NotFound - Registro não encontrado.',
  })
  @ApiOperation({ summary: 'Remove cadastro' })
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
