import React, { useState } from 'react';
import axios from 'axios';
import './TodoForm.css';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) return;

    try {
      const response = await axios.post('http://localhost:3001/api/tasks', { title: task });
      addTask(response.data);
      setTask('');
    } catch (error) {
      console.error("There was an error adding the task!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
