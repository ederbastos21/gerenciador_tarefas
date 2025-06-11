import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/Cabecalho';
import FormularioTarefa from '../../components/FormularioTarefa';
import ListaTarefas from '../../components/ListaTarefas';

const Home = () => {
  // 1) Estado inicial puxa do localStorage de forma preguiçosa
  const [tarefas, setTarefas] = useState(() => {
    const salvo = localStorage.getItem('tarefas');
    return salvo ? JSON.parse(salvo) : [];
  });

  // 2) Grava sempre que 'tarefas' mudar
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (novaTarefa) => {
    if (!novaTarefa.trim()) return;
    setTarefas(prev => [...prev, novaTarefa]);
  };

  return (
    <>
      <Cabecalho />
      <main>
        <FormularioTarefa aoAdicionar={adicionarTarefa} />
        <ListaTarefas tarefas={tarefas} />
      </main>
    </>
  );
};

export default Home;
