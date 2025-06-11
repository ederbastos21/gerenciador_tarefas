import React from 'react'
import { Container } from './styles'

const ListaTarefas = ({ tarefas }) => {
  return (
    <Container>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tarefas.map((tarefa, index) => (
          <div key={index}>{tarefa}</div>
        ))
      )}
    </Container>
  )
}

export default ListaTarefas
