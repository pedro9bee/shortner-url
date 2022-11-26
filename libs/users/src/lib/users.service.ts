import { Body, Injectable } from '@nestjs/common';
import { AbstractService } from '@cocus/shared';
@Injectable()
export class UsersService extends AbstractService{

  async save(@Body() body): Promise<any>{
    const user = await this.prisma.user.create({data: body})
    const userWithoutPassword = exclude(user, ['password'])
    return {
        ...userWithoutPassword,
        password:""
    };
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
