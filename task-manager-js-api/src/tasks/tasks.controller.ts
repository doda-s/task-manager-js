import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { plainToInstance } from 'class-transformer';
import { TaskDto } from './dto/Task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @UseGuards(AuthGuard)
    @Get('all')
    getAllUserTasks(@Request() request) {
        return this.tasksService.getAllTasksByUserId(request.user.sub)
    }

    @UseGuards(AuthGuard)
    @Post('create')
    createTask(@Request() request, @Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.createTask(request.user.sub, createTaskDto);
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('done/:id')
    setTaskDone(@Param('id') id: number, @Request() request) {
        return this.tasksService.setTaskAsCompletedById(request.user.sub, id);
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('undone/:id')
    setTaskUndone(@Param('id') id: number, @Request() request) {
        return this.tasksService.setTaskAsNotCompletedById(request.user.sub, id);
    }

    @UseGuards(AuthGuard)
    @Delete('delete/:id')
    deleteTask(@Request() request, @Param('id') id) {
        return this.tasksService.deleteTaskById(request.user.sub, id);
    }

    @UseGuards(AuthGuard)
    @Post('update/:id')
    updateTask(@Request() request, @Body() createTaskDto: CreateTaskDto, @Param('id') id) {
        return this.tasksService.updateTaskById(request.user.sub, id, createTaskDto);
    }
}
