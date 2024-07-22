import React, { useState } from 'react';
import axios from 'axios';
import './TodoItem.css';

const TodoItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/api/tasks/${task._id}`, { title: newTitle });
      updateTask(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("There was an error updating the task!", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/tasks/${task._id}`);
      deleteTask(task._id);
    } catch (error) {
      console.error("There was an error deleting the task!", error);
    }
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
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={handleDelete}>Delete</button>
      {isEditing && <button onClick={handleUpdate}>Save</button>}
    </li>
  );
};

export default TodoItem;
