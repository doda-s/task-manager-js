import axios from "axios";

export class API {
    public API_URL = import.meta.env.VITE_API_URL;
    public API_PORT = import.meta.env.VITE_API_PORT; 

    public async authPost(endpoint: string, data: object) {
        const dataString = JSON.stringify(data)
        console.log('DataString: ' + dataString) // Debug
        const axiosConfig = {
            headers: {'Content-Type': 'application/json'},
        }
        const response = await axios.post(this.apiUrl()+endpoint, dataString, axiosConfig);
        return response;
    }

    public async allTasks(endpoint: string, token: string|null) {
        const access_token = `Bearer ${token}`
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': access_token,
            },
        }
        return axios.get(this.apiUrl()+endpoint, axiosConfig)
    }

    public async addTask(endpoint:string, token: string|null, taskTitle: string) {
        const access_token = `Bearer ${token}`
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': access_token,
            },
        }
        return axios.post(this.apiUrl()+endpoint, {title: taskTitle},axiosConfig)
    }

    public apiUrl(): string {
        return `http://${this.API_URL}${this.API_PORT? `:${this.API_PORT}`:""}`;
    }
}