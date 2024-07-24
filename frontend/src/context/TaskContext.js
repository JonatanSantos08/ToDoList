import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/tasks');
      setTasks(response.data);
    } catch (error) {
      setError('There was an error fetching the tasks!');
      console.error(error);
    }
  };

  const addTask = async (title) => {
    try {
      const response = await axios.post('http://localhost:3001/api/tasks', { title });
      setTasks([...tasks, response.data]);
      setError(null);
    } catch (error) {
      setError('There was an error adding the task!');
      console.error(error);
    }
  };

  const updateTask = async (id, title) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/tasks/${id}`, { title });
      setTasks(tasks.map(task => task._id === id ? response.data : task));
      setError(null);
    } catch (error) {
      setError('There was an error updating the task!');
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
      setError(null);
    } catch (error) {
      setError('There was an error deleting the task!');
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, updateTask, deleteTask, error }}>
      {children}
    </TaskContext.Provider>
  );
};
