const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Rota para adicionar uma nova tarefa
router.post('/tasks', async (req, res) => {
  const { title } = req.body;

  const newTask = new Task({ title });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para listar todas as tarefas
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para atualizar uma tarefa
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (title !== undefined) {
      task.title = title;
    }
    if (completed !== undefined) {
      task.completed = completed;
    }

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para deletar uma tarefa
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Task.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
