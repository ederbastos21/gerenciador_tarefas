import React, { useState } from 'react'
import { Container, Input, Botao } from './styles'

const FormularioTarefa = ({ aoAdicionar }) => {
  const [texto, setTexto] = useState('')

  const lidarComEnvio = (e) => {
    e.preventDefault()
    aoAdicionar(texto)
    setTexto('')
  }

  return (
    <Container onSubmit={lidarComEnvio}>
      <Input
        type="text"
        placeholder="Nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Botao type="submit">Adicionar</Botao>
    </Container>
  )
}

export default FormularioTarefa
