import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import DeleteTaskButton from './components/DeleteTaskButton';

function App() {
    const [editingTask, setEditingTask] = useState(null);
    const [tasksUpdated, setTasksUpdated] = useState(false); // State para atualizar lista de tarefas

    const handleEdit = (taskId) => {
        setEditingTask(taskId);
    };

    const handleUpdate = () => {
        setEditingTask(null);
        setTasksUpdated(!tasksUpdated); // Atualiza a lista de tarefas após a edição
    };

    const handleDelete = () => {
        setEditingTask(null);
        setTasksUpdated(!tasksUpdated); // Atualiza a lista de tarefas após a exclusão
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>ToDo List App</h1>
            </header>
            <main>
                <section>
                    <h2>Adicionar Nova Tarefa</h2>
                    <AddTaskForm onAdd={() => setTasksUpdated(!tasksUpdated)} />
                </section>

                <section>
                    <h2>Lista de Tarefas</h2>
                    <TaskList onEdit={handleEdit} onUpdate={handleUpdate} />
                </section>

                {editingTask && (
                    <section>
                        <h2>Editar Tarefa</h2>
                        <EditTaskForm taskId={editingTask} onUpdate={handleUpdate} />
                    </section>
                )}

                {editingTask && (
                    <section>
                        <h2>Deletar Tarefa</h2>
                        <DeleteTaskButton taskId={editingTask} onDelete={handleDelete} />
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
