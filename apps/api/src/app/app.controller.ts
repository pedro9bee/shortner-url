import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostURL } from '../dto/PostURL';
import { AppService } from './app.service';

@Controller('url')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData() {
    return this.appService.getData();
  }

  @Post('/generateShortnerURL')
  shortnerURL(@Body() body: PostURL) {
    return this.appService.createShortURL(body);
  }

  @Post('/visit/:shortURL')
  createShortURL(@Param('shortURL') shortURL) {
    return this.appService.getShortURL(shortURL);
  }
}
