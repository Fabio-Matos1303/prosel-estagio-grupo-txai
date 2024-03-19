import { PrismaService } from 'src/prisma/prisma.service';

export class ProductReposity {
  constructor(private readonly prisma: PrismaService) { }

  getProducts() {
    return this.prisma.product.findMany();
  }
}
