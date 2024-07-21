import './TodoItem.css';
import React from 'react';

function TodoItem({ task }) {
  return (
    <div className="todo-item">
      <p>{task}</p>
    </div>
  );
}

export default TodoItem;
