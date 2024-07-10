import React, { useState, useEffect } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            setTasks(data);
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <strong>{task.title}</strong>: {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
