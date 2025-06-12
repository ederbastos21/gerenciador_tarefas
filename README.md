# Gerenciador de Tarefas

Um aplicativo web simples de Gerenciador de Tarefas construído com React e Styled Components, que permite adicionar, editar, remover e marcar tarefas como concluídas. Os dados são guardados no `localStorage` entao a informação persiste durante sessoes. Tambem é possível gerar ideias de tarefas usando a API do Bored.

## Funcionalidades

* Adicionar novas tarefas com validação de campo obrigatório.
* Editar texto da tarefa inline.
* Marcar/desmarcar tarefas como concluídas.
* Remover tarefas.
* Persistência de tarefas no localStorage.
* Gerar ideia de tarefa via Fetch API (Bored API) usando proxy CORS.
* Layout responsivo com Flexbox, Grid e Media Queries.

## Tecnologias

* React
* Styled Components
* React Router
* JavaScript (ES6+)
* Fetch API
* LocalStorage
* Node.js (v14+)

## Como rodar localmente

### Pré-requisitos

* Node.js v14 ou superior
* npm ou yarn

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/ederbastos21/gerenciador_tarefas.git

   # ou via ssh
   
   git clone git@github.com:ederbastos21/gerenciador_tarefas.git

   ```
2. Navegue até a pasta do projeto:

   ```bash
   cd gerenciador-tarefas
   ```
3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```
4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   # ou
   yarn start
   ```
5. Abra no navegador em `http://localhost:3000`.
