import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    // Não se deve colocar os dados de usuários diretamente no código.
    // O usuários estão inseridos diretamente no código
    // apenas para testes. 
    // Isso aqui deve ser substituido por uma integração com o
    // banco de dados.
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async getUser(username: string) {
        return this.users.find(user => user.username === username);
    }

    async addUser(username: string, pass: string) {
        const lastUser = this.users[this.users.length-1]
        var idToAdd: number = lastUser? lastUser.userId+1:1;
        const userToAdd = {
            userId: idToAdd,
            username: username,
            password: pass,
        }
        this.users.push(userToAdd)
    }
}
