import React, { useState } from 'react';
import './TodoItem.css';
import { useTasks } from '../context/TaskContext';

const TodoItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const { updateTask, deleteTask } = useTasks();

  const handleUpdate = () => {
    updateTask(task._id, newTitle);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input 
          type="text" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
        />
      ) : (
        <span>{task.title}</span>
      )}
      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
