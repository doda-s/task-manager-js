import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserAuthDto {
    @IsString()
    @IsOptional()
    @Expose()
    _id?: string
    
    @IsNotEmpty()
    @IsString()
    @Expose()
    username: string;

    @IsNotEmpty()
    @IsString()
    @Expose()
    password: string;
}