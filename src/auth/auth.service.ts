/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRepository } from 'src/modules/login/repository/login.repository';
import { sign } from 'jsonwebtoken'

@Injectable()
export class AuthService {
  constructor(
    private loginRepository: LoginRepository,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string): Promise<any> {
    const user = await this.loginRepository.findUserByEmail(email);
    if (user) {
      return user;
    }
    throw new UnauthorizedException('Invalid email or password');
  }

  async login(user: any) {
    const payload = {
      id: user.id,
      name: user.username,
      email: user.email,
      userRole: user.userRole,
    };

    console.log(user);

    return sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
  }
}
