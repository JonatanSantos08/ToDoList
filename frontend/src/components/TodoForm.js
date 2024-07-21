import './TodoForm.css';
import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        placeholder="Add a task" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
