import { Injectable } from '@nestjs/common';
import { PrismaService } from '@cocus/shared';

@Injectable()
export class URLService{
    constructor(private prisma: PrismaService) {}
}