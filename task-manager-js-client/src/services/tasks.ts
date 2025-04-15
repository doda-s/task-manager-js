import { API } from "../api/api"
 
 export class TasksService {
    private api = new API();
    async allTasks() {
        return await this.api.allTasks("/tasks/all", localStorage.getItem("token")); 
    }

    async addTask(title: string) {
        return await this.api.addTask('/tasks/create', localStorage.getItem("token"), title);
    }
 }