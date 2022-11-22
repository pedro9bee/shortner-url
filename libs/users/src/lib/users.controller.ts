import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { UserDTO } from '@cocus/types';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

    @Get()
    public async getUsers(): Promise<User[]> {
      return this.usersService.getUsers();
    }

    @Post('/register')
    async register(@Body() body: UserDTO): Promise<User> {
      return this.usersService.register(body);
    }
}
