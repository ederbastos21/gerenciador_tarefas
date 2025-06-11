import React from 'react';
import { Container } from './styles';

const ListaTarefas = ({ tarefas, aoRemover }) => {
  return (
    <Container>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tarefas.map((tarefa) => (
          <div key={tarefa.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{tarefa.texto}</span>
            <button onClick={() => aoRemover(tarefa.id)} style={{ cursor: 'pointer', background: 'transparent', border: 'none', color: 'red', fontSize: '1.2rem' }}>
              Remover
            </button>
          </div>
        ))
      )}
    </Container>
  );
};

export default ListaTarefas;
