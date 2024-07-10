import React from 'react';

const DeleteTaskButton = ({ taskId, onDelete }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Tarefa deletada com sucesso!');
                onDelete(); // Atualiza a lista de tarefas após a remoção
            } else {
                console.error('Erro ao deletar tarefa');
            }
        } catch (error) {
            console.error('Erro ao deletar tarefa', error);
        }
    };

    return (
        <button onClick={handleDelete}>Deletar Tarefa</button>
    );
};

export default DeleteTaskButton;
