import { HttpException, Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TasksService {
  constructor(private usersService: UsersService) {}

    private tasks = [
      {
        "userId": 2,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 2,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
    ]

    async getAllTasksByUserId(userId: string) { 
      const idIsValid = mongoose.Types.ObjectId.isValid(userId);
      if (!idIsValid) throw new HttpException("ID de usuário é inválido!", 404);
      const user = await this.usersService.getUserById(userId);
      if (!user) throw new HttpException("Usuário não encontrado!", 404);
      return user?.tasks;
    }

    async createTask(userId: string, createTaskDto: CreateTaskDto) {
      const idIsValid = mongoose.Types.ObjectId.isValid(userId);
      if (!idIsValid) throw new HttpException("ID de usuário é inválido!", 404);
      const user = await this.usersService.getUserById(userId);
      if (!user) throw new HttpException("Usuário não encontrado!", 404);

      const newTaskId = user.tasks.length > 0? Math.max(...user.tasks.map(task => task.taskId)) + 1
      : 1;
      user.tasks.push({
        taskId: newTaskId,
        title: createTaskDto.title,
        completed: createTaskDto.completed ?? false,
      });
      await user.save()
    }

    async setTaskAsCompletedById(userId: string, taskId) {
      const idIsValid = mongoose.Types.ObjectId.isValid(userId);
      if (!idIsValid) throw new HttpException("ID de usuário é inválido!", 404);
      const user = await this.usersService.getUserById(userId);
      if (!user) throw new HttpException("Usuário não encontrado!", 404);
      const task = user.tasks.find(t => Number(t.taskId) === Number(taskId));
      if (!task) throw new HttpException("Tarefa não encontrada!", 404);
      task.completed = true;
      user.markModified('tasks');
      await user.save()
      return {
        message: "Tarefa concluída!",
      };
    }

    async setTaskAsNotCompletedById(userId: string, taskId) {
      const idIsValid = mongoose.Types.ObjectId.isValid(userId);
      if (!idIsValid) throw new HttpException("ID de usuário é inválido!", 404);
      const user = await this.usersService.getUserById(userId);
      if (!user) throw new HttpException("Usuário não encontrado!", 404);
      const task = user.tasks.find(t => Number(t.taskId) === Number(taskId));
      if (!task) throw new HttpException("Tarefa não encontrada!", 404);
      task.completed = false;
      user.markModified('tasks');
      await user.save()
      return {
        message: "Tarefa não concluída!",
      };
    }

    async deleteTaskById(userId: string, taskId) {
      const idIsValid = mongoose.Types.ObjectId.isValid(userId);
      if (!idIsValid) throw new HttpException("ID de usuário é inválido!", 404);
      const user = await this.usersService.getUserById(userId);
      if (!user) throw new HttpException("Usuário não encontrado!", 404);

      user.tasks = user.tasks.filter(t => Number(t.taskId)!==Number(taskId));
      user.markModified('tasks');
      await user.save()
      return { message: 'Tarefa deletada!' };
    }

    async updateTaskById(userId, taskId, createTaskDto: CreateTaskDto) {
      const idIsValid = mongoose.Types.ObjectId.isValid(userId);
      if (!idIsValid) throw new HttpException("ID de usuário é inválido!", 404);
      const user = await this.usersService.getUserById(userId);
      if (!user) throw new HttpException("Usuário não encontrado!", 404);
      user.tasks.forEach((task, index) => {
        if (Number(task.taskId) === Number(taskId)) {
          task.title = createTaskDto.title;
          task.completed = createTaskDto.completed ?? false;
          user.tasks[index] = task;
          return;
        }
      });
      user.markModified('tasks');
      await user.save()
      return {
        message: 'Tarefa atualizada!',
      }
    }

}
