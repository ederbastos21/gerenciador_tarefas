import React, { useState } from 'react'
import { Container } from './styles'

const ListaTarefas = ({ tarefas, aoEditar, aoRemover }) => {
  const [editandoId, setEditandoId] = useState(null)
  const [textoEditado, setTextoEditado] = useState('')

  const iniciarEdicao = (tarefa) => {
    setEditandoId(tarefa.id)
    setTextoEditado(tarefa.texto)
  }

  const finalizarEdicao = (id) => {
    const trimmed = textoEditado.trim()
    if (trimmed) {
      aoEditar(id, trimmed)
    }
    setEditandoId(null)
    setTextoEditado('')
  }

  const cancelarEdicao = () => {
    setEditandoId(null)
    setTextoEditado('')
  }

  return (
    <Container>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tarefas.map((tarefa) => (
          <div key={tarefa.id} className="item">
            {editandoId === tarefa.id ? (
              <input
                type="text"
                value={textoEditado}
                onChange={e => setTextoEditado(e.target.value)}
                onBlur={() => finalizarEdicao(tarefa.id)}
                onKeyDown={e => {
                  if (e.key === 'Enter') finalizarEdicao(tarefa.id)
                  if (e.key === 'Escape') cancelarEdicao()
                }}
                autoFocus
              />
            ) : (
              <span className={tarefa.concluida ? 'concluida' : ''}>
                {tarefa.texto}
              </span>
            )}

            <div className="botoes">
              <button
                className="btn-editar"
                onClick={() => editandoId !== tarefa.id && iniciarEdicao(tarefa)}
              >
                Editar
              </button>
              <button
                className="btn-remover"
                onClick={() => aoRemover(tarefa.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))
      )}
    </Container>
  )
}

export default ListaTarefas
