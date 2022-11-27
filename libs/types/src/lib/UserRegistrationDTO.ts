import { IsEmail, IsNotEmpty } from 'class-validator';

class UserRegistrationDTO{
    
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    enabled: boolean;

    @IsNotEmpty()
    @IsEmail()
    email: string;
 
    @IsNotEmpty()
    credentials: Credentials[];
    
    @IsNotEmpty()
    userName: string;
    
}
class Credentials{
    type: string;
    value: string;
}
export { UserRegistrationDTO, Credentials };