import { Body, Injectable } from '@nestjs/common';
import { AbstractService } from '@cocus/shared';
import { AuthService } from '@cocus/auth';
import { HttpService } from '@nestjs/axios';
import { Credentials, UserRegistrationDTO } from '@cocus/types';
@Injectable()
export class UsersService extends AbstractService{

  async save(@Body() body:UserRegistrationDTO): Promise<any>{

    const user = await this.prisma.user.create({
      data: {
      "firstName": body.firstName,
      "lastName": body.lastName,
      "name": body.userName,
      "email": body.email,
      "password": body.credentials[0].value
      }
    })

    const credentials:Credentials[] = [
       {
            "type": "password",
            "value": body.credentials[0].value
        }] as Credentials[];

    const dataKeycloak = {
      "firstName": body.firstName,
      "lastName": body.lastName,
      "userName": body.userName,
      "email": body.email,
      "enabled": true,
      "credentials": 
        credentials
      
    } as UserRegistrationDTO
    
    const httpService = new HttpService();
    const userKeyCloak = await new AuthService(httpService).register(dataKeycloak);
    const userWithoutPassword = exclude(user, ['password'])
    return {
        ...userWithoutPassword, 
        userKeyCloak
    };
  }
}

function exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
  ): Omit<User, Key> {
    // eslint-disable-next-line prefer-const
    for (let key of keys) {
      delete user[key]
    }
    return user
  }
