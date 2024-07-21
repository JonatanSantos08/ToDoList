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

module.exports = router;
