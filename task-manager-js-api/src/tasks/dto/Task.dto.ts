import { IsBoolean, IsNumber, IsString } from "class-validator";

export class TaskDto {
    @IsNumber()
    taskId: number;

    @IsString()
    title: string

    @IsBoolean()
    completed: boolean;
}