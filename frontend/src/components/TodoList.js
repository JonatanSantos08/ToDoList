import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { useTasks } from '../context/TaskContext';

const TodoList = () => {
  const { tasks, fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
