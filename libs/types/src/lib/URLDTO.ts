import { IsNotEmpty } from "class-validator";

class URLDTO {
    id?: number;

    user?:string;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    shortURL: string;

    @IsNotEmpty()
    longURL: string;

    @IsNotEmpty()
    type: string;

    createdAt: Date;
    updatedAt: Date
  }
 export{URLDTO};