# 📋 Minhas Tarefas

Um aplicativo simples de lista de tarefas, onde você pode adicionar, visualizar, marcar como concluída e excluir tarefas.


## 🚀 Tecnologias

- **Frontend:** React + Vite + TypeScript + Styled Components
- **Backend:** Node.js + Express
- **Banco de Dados:** MySQL
Opcional: Docker para rodar a aplicação sem precisar de instalação de bibliotecas


## ⚙️ Configuração do projeto

1. Crie o banco de dados MySQL juntamente com a tabela tarefas:
```sql
CREATE DATABASE tarefasDB;

USE tarefasDB;

CREATE TABLE tarefas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tarefa VARCHAR(255) NOT NULL
);
```

2. Para executar o backend, execute os seguintes comandos:

```bash
   cd backend
   npm install
   node index.js
```

3. Para executar o frontend, execute os seguintes comandos:

```bash
   cd frontend
   npm install
   npm run dev
```
##  🌐 Rotas da API
GET /tarefas - Lista todas as tarefas
POST /tarefas - Cria uma nova tarefa
DELETE /tarefas/:id - Exclui uma tarefa


## ✨ Funcionalidades
 - Adicionar nova tarefa
 - Listar todas as tarefas
 - Marcar tarefa como concluída
 - Excluir tarefa