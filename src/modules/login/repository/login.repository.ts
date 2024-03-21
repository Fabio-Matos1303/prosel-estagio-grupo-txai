import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

/* eslint-disable prettier/prettier */
@Injectable()
export class LoginRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findFirstOrThrow({
      where: { email },
    });
  }
}
