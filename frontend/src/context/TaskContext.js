import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("There was an error fetching the tasks!", error);
    }
  };

  const addTask = async (title) => {
    try {
      const response = await axios.post('http://localhost:3001/api/tasks', { title });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("There was an error adding the task!", error);
    }
  };

  const updateTask = async (id, title) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/tasks/${id}`, { title });
      setTasks(tasks.map(task => task._id === id ? response.data : task));
    } catch (error) {
      console.error("There was an error updating the task!", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error("There was an error deleting the task!", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
