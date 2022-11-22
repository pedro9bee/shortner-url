import { Injectable } from '@nestjs/common';
import { PostURL } from '@cocus/types';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  createShortURL(body: PostURL): { message: string } {
    return { message: `Shorthening URL  + ${ JSON.stringify(body) }` };
  }

  getShortURL(urlKey: string): { message: string } {
    return { message: `getShortening URL  + ${urlKey}` };
  }

}
