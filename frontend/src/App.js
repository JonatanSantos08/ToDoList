import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useTasks } from './context/TaskContext';

function App() {
  const { error } = useTasks();

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        {error && <div className="error-message">{error}</div>}
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
