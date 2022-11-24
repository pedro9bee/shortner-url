import { Body, Controller, Get, Post } from '@nestjs/common';
import { Url } from '@prisma/client';
import { URLDTO } from '@cocus/types';
import { AbstractService } from '@cocus/shared';
 
@Controller('url')
export class URLController {
  constructor(private usersService: AbstractService) {}

    @Get()
    public async getURLs(): Promise<Url[]> {
      return this.usersService.find({}, "url")
    }

    @Post('/create')
    async register(@Body() body: URLDTO): Promise<Url> {
      return this.usersService.save(body, "url");
    }
}