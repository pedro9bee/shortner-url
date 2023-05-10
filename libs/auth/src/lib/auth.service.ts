import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map, tap } from 'rxjs';
import { Authenticate } from '@9bee/types';
import { UserRegistrationDTO } from '@9bee/types';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  public async login(username, password): Promise<Authenticate | Error> {
    const headersRequest = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const dataBody = {
      grant_type: 'password',
      client_id: 'shorther-url',
      client_secret: 'znPl3NKpUxDtEzZihser6HK5vpmKM5h1',
      scope: 'openid',
      username,
      password,
    };

    const body = JSON.stringify(dataBody);
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(
          'http://localhost:8080/auth/realms/Ninebee/protocol/openid-connect/token',
          new URLSearchParams(dataBody),
          { headers: headersRequest }
        )
      );
      return {
        access_token: data.access_token,
        expires_in: data.expires_in,
        refresh_expires_in: data.refresh_expires_in,
        refresh_token: data.refresh_token,
        token_type: data.token_type,
        id_token: data.id_token,
        'not-before-policy': data['not-before-policy'],
        session_state: data.session_state,
        scope: data.scope,
      };
    } catch (err) {
      return new Error(err);
    }
  }
  public async register(user: UserRegistrationDTO): Promise<null | Error> {
    const respAuth = await this.login('plemos', 'secret');
    if (respAuth instanceof Error) {
      return respAuth;
    }
    const headersRequest = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${respAuth.access_token}`,
    };

    const dataBody = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      enabled: true,
      username: user.userName,
      credentials: user.credentials,
    };

    const body = JSON.stringify(dataBody);

    try {
      const resp = await firstValueFrom(
        this.httpService.post(
          'http://localhost:8080/auth/admin/realms/Ninebee/users',
          body,
          { headers: headersRequest }
        )
      );
    } catch (err) {
      return new Error(err);
    }
  }
}
