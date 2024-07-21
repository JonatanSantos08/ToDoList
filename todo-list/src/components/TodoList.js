import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks }) {
  return (
    <div>
      <h2>My To-Do List</h2>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
