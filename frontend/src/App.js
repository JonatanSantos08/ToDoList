import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} />
      </header>
    </div>
  );
}

export default App;
