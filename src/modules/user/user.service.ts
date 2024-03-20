/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly entity: UserRepository) { }

  async create(createUserDto: CreateUserDto) {
    return await this.entity.create(createUserDto);
  }

  async findAll() {
    const user = await this.entity.findAll();

    return user;
  }

  async findById(id: string) {
    return await this.entity.findById(id);
  }

  async update(id: string, updateUserDTO: UpdateUserDto) {
    return await this.entity.update(id, updateUserDTO);
  }

  async remove(id: string) {
    return await this.entity.remove(id);
  }
}
