import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

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

    async getAllTasksByUser(userId: number) { 
        return this.tasks.filter(task => task.userId === userId);
    }

    async createTask(userId, task: Record<string, any>) {
      const lastTask = this.tasks[this.tasks.length-1];
      const taskIdToAdd = lastTask? lastTask.id+1:1;
      const taskToAdd = {
        "userId": Number(userId),
        "id": taskIdToAdd,
        "title": task.title,
        "completed": false,
      };
      this.tasks.push(taskToAdd);
      return {
        message: "Tarefa criada!",
        task: taskToAdd,
      }
    }

    async setTaskAsCompleteById(userId, taskId) {
      const task = this.tasks.find(t => t.userId === Number(userId) && t.id === Number(taskId));
      if (task) {
        task.completed = true;
      }
      return {
        message: "Tarefa concluída!",
        task: task,
      };
    }

    async deleteTaskById(userId, taskId) {
      this.tasks = this.tasks.filter(t => t.userId===Number(userId) && t.id !==Number(taskId));
      return { message: 'Tarefa deletada!' };
    }

    async updateTaskById(userId, taskId, body: Record<string, any>) {
      let updatedTask
      this.tasks.forEach((task, index) => {
        if (task.userId === Number(userId) && task.id === Number(taskId)) {
          task.title = body.title;
          this.tasks[index] = task;
          updatedTask = task
          return;
        }
      });
      return {
        message: 'Tarefa atualizada!',
        task: updatedTask,
      }
    }

}
