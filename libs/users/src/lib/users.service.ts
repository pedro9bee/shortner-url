import { Body, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();


@Injectable()
export class UsersService {
    public getUsers(): Promise<User[]> {
        return prisma.user.findMany({ take: 10 });
    }
    public async register(@Body() body): Promise<Omit<User, "password">>{
        const user = await prisma.user.create({data: body})
        const userWithoutPassword = exclude(user, ['password'])
        return userWithoutPassword;
    }
}
function exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
  ): Omit<User, Key> {
    // eslint-disable-next-line prefer-const
    for (let key of keys) {
      delete user[key]
    }
    return user
  }
