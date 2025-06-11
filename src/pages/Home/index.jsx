import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import FormularioTarefa from '../../components/FormularioTarefa'
import ListaTarefas from '../../components/ListaTarefas'

const Home = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <FormularioTarefa />
        <ListaTarefas />
      </main>
    </>
  )
}

export default Home
