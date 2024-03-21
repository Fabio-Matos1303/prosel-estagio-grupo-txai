/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/login/login.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductModule, UserModule, LoginModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
