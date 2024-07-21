import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task }) => {
  return (
    <li className="todo-item">
      {task.title}
    </li>
  );
};

export default TodoItem;
