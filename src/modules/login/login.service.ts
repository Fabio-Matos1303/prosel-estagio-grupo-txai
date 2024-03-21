/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRepository } from './repository/login.repository';
import * as bcrypt from 'bcrypt'
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    private readonly repository: LoginRepository,
    private readonly authService: AuthService
  ) { }

  async login(loginDto: LoginDto) {
    const user = await this.repository.findUserByEmail(loginDto.email);
    const result = bcrypt.compareSync(loginDto.password, user.password)
    if (!result) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return await this.authService.login(user);
  }
}
