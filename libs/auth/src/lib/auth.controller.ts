import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import {Response} from "express";
import { Authenticate, UserRegistrationDTO } from '@cocus/types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  async register(
    @Body() body: UserRegistrationDTO,
    @Res({passthrough: true}) response: Response,){
      const registerUser = await this.authService.register(body);
      console.log(registerUser);
      response.status(200).send({registerUser});
  }

  @Post('login')
  async login(
    @Body() body: { username: string; password: string },
    @Res({passthrough: true}) response: Response,
    ): Promise<Authenticate | Error> {
    const resKeyCloak = await this.authService.login(body.username, body.password);
    if(resKeyCloak instanceof Error){
      return resKeyCloak;
    }
    response.cookie('jwt', resKeyCloak.access_token, {httpOnly: true});
    response.status(200).send({
      access_token: resKeyCloak.access_token
    });
  }

}
