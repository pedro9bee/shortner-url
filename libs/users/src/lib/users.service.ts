import { Body, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
    public getUsers(): Promise<User[]> {
        return prisma.user.findMany({ take: 10 });
    }
    public async register(@Body() body): Promise<User> {
        return prisma.user.create({data: body});
    }
}
