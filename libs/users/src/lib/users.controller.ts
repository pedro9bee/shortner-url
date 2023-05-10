import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRegistrationDTO } from '@9bee/types';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return this.usersService.find({}, 'user');
  }

  @Post('/register')
  async register(@Body() body: UserRegistrationDTO): Promise<User> {
    return this.usersService.save({
      ...body,
    });
  }
}
