import { Body, Controller, Post, Request } from '@nestjs/common';
import { UserDTO } from '../dto/userDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
      
    @Post('/register')
    createUser(@Body() body: UserDTO, @Request() req) {
        return this.userService.save(body);
        req.cookies;
    }

    @Post('/update')
    updateUser(@Body() body: UserDTO) {
        return this.userService.login(body);
    }

    @Post('/login')
    login(@Body() body: UserDTO) {
        return this.userService.login(body);
    }
}
