import React, { useState } from 'react';
import './TodoForm.css';
import { useTasks } from '../context/TaskContext';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) return;

    await addTask(task);
    setTask('');
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
