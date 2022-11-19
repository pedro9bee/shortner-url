import { Body, Controller, Post } from '@nestjs/common';
import { PostURL } from '../dto/PostURL';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
      
    @Post('/register')
    createUser(@Body() body: PostURL) {
        return this.userService.createUser(body);
    }

    @Post('/login')
    login(@Body() body: PostURL) {
        return this.userService.loginUser(body);
    }
}
