import { IsBoolean, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    title: string

    @IsBoolean()
    completed: boolean
}