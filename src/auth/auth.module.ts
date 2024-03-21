/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LoginModule } from 'src/modules/login/login.module';
import { LoginRepository } from 'src/modules/login/repository/login.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    LoginModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [PrismaService, AuthService, JwtStrategy, LoginRepository],
  exports: [AuthService],
})
export class AuthModule { }
