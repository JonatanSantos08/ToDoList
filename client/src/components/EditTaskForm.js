import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ taskId, onUpdate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`);
                const data = await response.json();
                setTitle(data.title);
                setDescription(data.description);
            } catch (error) {
                console.error('Erro ao buscar tarefa para edição', error);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            if (response.ok) {
                console.log('Tarefa atualizada com sucesso!');
                onUpdate(); // Atualiza a lista de tarefas após a edição
            } else {
                console.error('Erro ao atualizar tarefa');
            }
        } catch (error) {
            console.error('Erro ao atualizar tarefa', error);
        }
    };

    return (
        <div>
            <h2>Editar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="edit-title">Novo Título:</label>
                    <input
                        type="text"
                        id="edit-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="edit-description">Nova Descrição:</label>
                    <textarea
                        id="edit-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Atualizar Tarefa</button>
            </form>
        </div>
    );
};

export default EditTaskForm;
