import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Task } from "./task.schema";

 @Schema()
 export class User {
    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    tasks: Task[]
 }
 export const UserSchema = SchemaFactory.createForClass(User);