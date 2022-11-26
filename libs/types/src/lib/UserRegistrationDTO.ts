import { IsEmail, IsNotEmpty } from 'class-validator';

class UserRegistrationDTO{
    
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
export { UserRegistrationDTO };