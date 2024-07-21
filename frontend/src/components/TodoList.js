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

  return (
    <div className="todo-list">
      <ul>
        {fetchedTasks.map((task) => (
          <TodoItem key={task._id} task={task} />
        ))}
        {tasks.map((task) => (
          <TodoItem key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
