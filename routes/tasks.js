const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Rota para criar uma tarefa
router.post('/tasks', async (req, res) => {
    const { title, description } = req.body;

    try {
        const newTask = new Task({
            title,
            description
        });

        const task = await newTask.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Rota para listar todas as tarefas
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para buscar uma tarefa pelo ID
router.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para atualizar uma tarefa pelo ID
router.patch('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, updates, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Rota para deletar uma tarefa pelo ID
router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json({ message: 'Tarefa deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
