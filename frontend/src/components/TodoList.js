import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ tasks }) => {
  const [fetchedTasks, setFetchedTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tasks');
        setFetchedTasks(response.data);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    };

    fetchTasks();
  }, []);

  const updateTask = (updatedTask) => {
    setFetchedTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setFetchedTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  };

  return (
    <div className="todo-list">
      <ul>
        {fetchedTasks.map((task) => (
          <TodoItem key={task._id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
        {tasks.map((task) => (
          <TodoItem key={task._id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
