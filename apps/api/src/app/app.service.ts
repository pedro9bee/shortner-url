import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getShortURL(urlKey: string): { message: string } {
    return { message: `getShortening URL  + ${urlKey}` };
  }

}
