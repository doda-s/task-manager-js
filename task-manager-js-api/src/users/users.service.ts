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
}
