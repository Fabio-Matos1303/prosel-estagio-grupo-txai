/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { LoginRepository } from './repository/login.repository';
import * as bcrypt from 'bcrypt'
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly entity: LoginRepository,
    private readonly authService: AuthService
  ) { }

  async login(LoginDto: any) {
    const user = await this.entity.findUserByEmail(LoginDto.email);
    return bcrypt.compareSync(LoginDto.password, user.password)
  }
}
