import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserDTO } from '@cocus/types';
import { AbstractService } from '@cocus/shared';

@Controller('user')
export class UsersController {
  constructor(private usersService: AbstractService) {}

    @Get()
    public async getUsers(): Promise<User[]> {
      return this.usersService.find({}, "user")
    }

    @Post('/register')
    async register(@Body() body: UserDTO): Promise<User> {
      return this.usersService.save({body}, "user");
    }
}
