import { Injectable } from '@nestjs/common';
import { PostURL } from '../dto/PostURL';

@Injectable()
export class UserService {
  createUser(body: PostURL ): { message: string } {
    return { message: `createUser: + ${ JSON.stringify(body) }` };
  }

  loginUser(body: PostURL): { message: string } {
    return { message: `loginUser  + ${ JSON.stringify(body) }` };
  }
}
