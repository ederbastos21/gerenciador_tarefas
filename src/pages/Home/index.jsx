import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/Cabecalho';
import FormularioTarefa from '../../components/FormularioTarefa';
import ListaTarefas from '../../components/ListaTarefas';

const Home = () => {
  const [tarefas, setTarefas] = useState(() => {
    const salvo = localStorage.getItem('tarefas');
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (novaTarefa) => {
    if (!novaTarefa.trim()) return;
    setTarefas(prev => [...prev, { id: Date.now(), texto: novaTarefa, concluida: false }]);
  };

  const removerTarefa = (id) => {
    setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
  };

  return (
    <>
      <Cabecalho />
      <main>
        <FormularioTarefa aoAdicionar={adicionarTarefa} />
        <ListaTarefas tarefas={tarefas} aoRemover={removerTarefa} />
      </main>
    </>
  );
};

export default Home;
