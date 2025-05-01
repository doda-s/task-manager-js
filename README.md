# 🗂️ Task Manager API

A **Task Manager API** é uma API RESTful desenvolvida com [Nest.js](https://nestjs.com/) com foco educacional. O objetivo é criar uma API de gerenciamento de tarefas, onde usuários poderão adicionar, editar, excluir e listar suas tarefas de forma organizada.

> ⚠️ Projeto em estágio inicial de desenvolvimento.


## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) (versão mínima: 20)
- [Nest.js](https://nestjs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose](https://mongoosejs.com/)

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/task-manager-api.git
   cd task-manager-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## ▶️ Como executar

- Para rodar a aplicação:
  ```bash
  npm run start
  ```

- Para rodar em modo desenvolvimento com hot reload:
  ```bash
  npm run start:dev
  ```

## 🧪 Autenticação

A autenticação é baseada em **JWT (JSON Web Token)**. O fluxo funciona assim:

1. O usuário envia `username` e `password` para o endpoint de login ou registro.
2. O sistema verifica as credenciais.
3. Se estiver tudo certo, um access token JWT é retornado.

### 🔐 Endpoints de Autenticação

- `POST /auth/login`: realiza o login do usuário.
  - Payload esperado:
    ```json
    {
      "username": "seu_usuario",
      "password": "sua_senha"
    }
    ```
  - Retorna:
    ```json
    {
      "access_token": "..."
    }
    ```

- `POST /auth/register`: cria um novo usuário.
  - Payload esperado:
    ```json
    {
      "username": "novo_usuario",
      "password": "nova_senha"
    }
    ```
  - Retorna:
    ```json
    {
      "access_token": "..."
    }
    ```

- `GET /auth/profile`: retorna o perfil do usuário autenticado (necessita token no header Authorization).

## 📡 Endpoints de Tarefas

> Todos os endpoints abaixo requerem autenticação via token JWT.

- `GET /tasks/all`  
  Retorna todas as tarefas do usuário autenticado.

- `POST /tasks/create`  
  Cria uma nova tarefa na lista do usuário.  
  Payload:
  ```json
  {
    "title": "Some text here",
    "checked": false
  }
  ```

- `POST /tasks/done/:id`  
  Marca a tarefa com o ID fornecido como **concluída**.

- `POST /tasks/undone/:id`  
  Marca a tarefa com o ID fornecido como **não concluída**.

- `POST /tasks/update/:id`  
  Atualiza os dados da tarefa com o ID fornecido.  
  Payload:
  ```json
  {
    "title": "Some text here",
    "checked": false
  }
  ```

- `DELETE /tasks/delete/:id`  
  Remove a tarefa com o ID fornecido.

## ✅ Funcionalidades implementadas

- [x] Autenticação com JWT  
- [x] Cadastro de tarefas  
- [x] Listagem de tarefas  
- [x] Edição de tarefas  
- [x] Exclusão de tarefas  
- [x] Marcar tarefas como concluídas  
- [x] Marcar tarefas como não concluídas  
- [x] Integração com MongoDB (via Mongoose)

## ❗ Requisitos

- Node.js versão 20 ou superior

## 📄 Licença

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007

## 🤝 Contribuições

Atualmente este projeto **não aceita contribuições externas**, pois é voltado para estudos pessoais.

## 📌 Observações
  
- Este projeto **não possui deploy** nem está disponível no npm.
