import React, { useState } from 'react';

const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            if (response.ok) {
                console.log('Tarefa adicionada com sucesso!');
                setTitle('');
                setDescription('');
            } else {
                console.error('Erro ao adicionar tarefa');
            }
        } catch (error) {
            console.error('Erro ao adicionar tarefa', error);
        }
    };

    return (
        <div>
            <h2>Adicionar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar Tarefa</button>
            </form>
        </div>
    );
};

export default AddTaskForm;
