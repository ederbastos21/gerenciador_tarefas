import React, { useState, useEffect } from 'react'
import Cabecalho from '../../components/Cabecalho'
import FormularioTarefa from '../../components/FormularioTarefa'
import ListaTarefas from '../../components/ListaTarefas'

const Home = () => {
  const [tarefas, setTarefas] = useState(() => {
    const salvo = localStorage.getItem('tarefas')
    return salvo ? JSON.parse(salvo) : []
  })

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  const adicionarTarefa = (texto) => {
    const trimmed = texto.trim()
    if (!trimmed) return
    setTarefas(prev => [
      ...prev,
      { id: Date.now(), texto: trimmed, concluida: false }
    ])
  }

  const editarTarefa = (id, novoTexto) => {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, texto: novoTexto }
          : t
      )
    )
  }

  const removerTarefa = (id) => {
    setTarefas(prev => prev.filter(t => t.id !== id))
  }

  return (
    <>
      <Cabecalho />
      <main>
        <FormularioTarefa aoAdicionar={adicionarTarefa} />
        <ListaTarefas
          tarefas={tarefas}
          aoEditar={editarTarefa}
          aoRemover={removerTarefa}
        />
      </main>
    </>
  )
}

export default Home
