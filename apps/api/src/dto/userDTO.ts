import { IsNumberString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO{
    @IsNumberString()
    id: number;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;


    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}