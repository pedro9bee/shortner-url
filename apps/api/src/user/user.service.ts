import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/userDTO';
import {Repository} from "typeorm";
import {User} from './user'
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from '../shared/abstract.service';
@Injectable()
export class UserService extends AbstractService{
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
) {
    super(userRepository);
}

  async save(body: UserDTO ){
    const user = await this.userRepository.save(body);
    return user;
  }

  async login(body: UserDTO ){
    return { message: `loginUser  + ${ JSON.stringify(body) }` };
  }
}
