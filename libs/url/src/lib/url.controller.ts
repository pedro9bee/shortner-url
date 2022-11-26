import { Body, Controller, Get, Post } from '@nestjs/common';
import { Url } from '@prisma/client';
import { URLDTO } from '@cocus/types';
import { URLService } from './url.service';
 
@Controller('url')
export class URLController {
  constructor(private urlService: URLService) {}

    @Get()
    public async getURLs(): Promise<Url[]> {
      return this.urlService.find({}, "url")
    }

    @Post('/create')
    async register(@Body() body: URLDTO): Promise<Url> {
      return this.urlService.save(body, "url");
    }
}