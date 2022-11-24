import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class AuthService {
    constructor(private readonly httpService: HttpService){}

    public async login(username, password): Promise<any> {
        const headersRequest = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const dataBody = {
            grant_type: 'password',
            client_id: 'shorther-url',
            client_secret: 'znPl3NKpUxDtEzZihser6HK5vpmKM5h1',
            scope: 'openid',
            username,
            password
        }
        console.log(dataBody);
        const body = JSON.stringify(dataBody);
        console.log(body)
        const { data } = await firstValueFrom(this.httpService.post('http://localhost:8080/auth/realms/Ninebee/protocol/openid-connect/token', 
        new URLSearchParams(dataBody),
        { headers: headersRequest },
        ))
        console.log(data)
        return data;
    }
}
