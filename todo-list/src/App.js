import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
