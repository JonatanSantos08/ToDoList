import React from 'react';

const TodoSection = ({ title, children }) => {
  return (
    <div className="todo-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default TodoSection;
