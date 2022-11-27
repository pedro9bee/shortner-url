import { IsNumber, IsEmail, IsNotEmpty, IsDateString } from 'class-validator';

class UserDTO{
    
    id: number;
    
    name?: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;


    @IsNotEmpty()
    @IsEmail()
    email: string;
 
    password?: string;
    
}
export { UserDTO };