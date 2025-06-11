import React, { useState } from 'react'
import { Container, Input, Botao, BotaoExemplo } from './styles'

const FormularioTarefa = ({ aoAdicionar }) => {
  const [texto, setTexto] = useState('')

  const lidarComEnvio = (e) => {
    e.preventDefault()
    aoAdicionar(texto)
    setTexto('')
  }

  const gerarExemplo = async () => {
    try {
      const resposta = await fetch('https://corsproxy.io/?https://bored-api.appbrewery.com/random')
      const dados = await resposta.json()
      setTexto(dados.activity)
      console.log(dados)
    } catch (erro) {
      console.error('Erro ao buscar exemplo:', erro)
    }
  }

  return (
    <Container onSubmit={lidarComEnvio}>
      <Input
        type="text"
        placeholder="Nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <BotaoExemplo type="button" onClick={gerarExemplo}>
        Me dê uma ideia (ingles)
      </BotaoExemplo>
      <Botao type="submit">Adicionar</Botao>
    </Container>
  )
}

export default FormularioTarefa
