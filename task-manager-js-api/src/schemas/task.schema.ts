import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Task {
    
    @Prop({ unique: true })
    taskId: number;

    @Prop({ required: true })
    title: string;

    @Prop({ default: false })
    completed: boolean;

}
export const TaskSchema = SchemaFactory.createForClass(Task);