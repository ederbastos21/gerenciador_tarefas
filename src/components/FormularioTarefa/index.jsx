import React from 'react'
import { Container, Input, Botao } from './styles'

const FormularioTarefa = () => {
  return (
    <Container>
      <Input type="text" placeholder="Nova tarefa..." />
      <Botao>Adicionar</Botao>
    </Container>
  )
}

export default FormularioTarefa
