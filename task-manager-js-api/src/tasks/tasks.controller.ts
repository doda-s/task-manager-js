import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @UseGuards(AuthGuard)
    @Get('all')
    getAllUserTasks(@Request() request) {
        return this.tasksService.getAllTasksByUser(request.user.sub)
    }

    @UseGuards(AuthGuard)
    @Post('create')
    createTask(@Request() request, @Body() body: Record<string, any>) {
        return this.tasksService.createTask(request.user.sub, body)
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('complete/:id')
    setTaskDone(@Param('id') id: number, @Request() request) {
        return this.tasksService.setTaskAsCompleteById(request.user.sub, id);
    }

    @UseGuards(AuthGuard)
    @Delete('delete/:id')
    deleteTask(@Request() request, @Param('id') id) {
        return this.tasksService.deleteTaskById(request.user.sub, id);
    }

    @UseGuards(AuthGuard)
    @Post('update/:id')
    updateTask(@Request() request, @Body() body: Record<string, any>, @Param('id') id) {
        return this.tasksService.updateTaskById(request.user.sub, id, body);
    }
}
