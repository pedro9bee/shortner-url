import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData() {
    return this.appService.getData();
  }


  @Get('/visit/:shortURL')
  createShortURL(@Param('shortURL') shortURL) {
    return this.appService.getShortURL(shortURL);
  }
}
