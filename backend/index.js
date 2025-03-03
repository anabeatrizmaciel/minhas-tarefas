const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',       
    password: '',       
    database: 'tarefasDB', 
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

app.use(cors());
app.use(express.json());

app.post('/tarefas', (req, res) => {
    const { tarefa } = req.body;
    if (!tarefa || !tarefa.trim()) {
        return res.status(400).json({ message: 'Tarefa inválida!' });
    }

    const query = 'INSERT INTO tarefas (tarefa) VALUES (?)';
    db.query(query, [tarefa], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar tarefa:', err);
            return res.status(500).json({ message: 'Erro ao cadastrar tarefa' });
        }
        res.status(201).json({
            message: 'Tarefa cadastrada com sucesso!',
            tarefa: tarefa,
        });
    });
});

app.get('/tarefas', (req, res) => {
    const query = 'SELECT * FROM tarefas';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar tarefas:', err);
            return res.status(500).json({ message: 'Erro ao buscar tarefas' });
        }
        res.status(200).json(results);
    });
});

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM tarefas WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Erro ao excluir tarefa:', err);
            return res.status(500).json({ message: 'Erro ao excluir tarefa' });
        }
        res.status(200).json({ message: 'Tarefa excluída com sucesso!' });
    });
});


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
