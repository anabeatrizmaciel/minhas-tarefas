import { useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalStyles } from './styles/GlobalStyles';
import Cabecalho from './components/Cabecalho';
import TarefaInput from './components/TarefaInput';
import TarefaLista from './components/TarefaLista';
import { Tarefa } from './types/tarefa';

function App() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/tarefas')
            .then(response => {
                const tarefasFormatadas = response.data.map((t: any) => ({
                    id: t.id,
                    titulo: t.tarefa,   
                    concluida: t.concluida ?? false 
                }));
                setTarefas(tarefasFormatadas);
            })
            .catch(error => {
                console.error('Erro ao buscar tarefas:', error);
            });
    }, []);    

    const adicionarTarefa = (titulo: string) => {
      axios.post('http://localhost:8080/tarefas', { tarefa: titulo })
          .then(response => {
              console.log('Tarefa adicionada:', response.data);
              setTarefas([...tarefas, { id: Date.now(), titulo, concluida: false }]);
          })
          .catch(error => {
              console.error('Erro ao adicionar tarefa:', error);
          });
  };  

    const alternarTarefa = (id: number) => {
        const tarefaAlterada = tarefas.map(t =>
            t.id === id ? { ...t, concluida: !t.concluida } : t
        );
        setTarefas(tarefaAlterada);

        // axios.put(`http://localhost:8080/tarefas/${id}`, { concluida: !tarefa.concluida });
    };

    const excluirTarefa = (id: number) => {
      axios.delete(`http://localhost:8080/tarefas/${id}`)
          .then(response => {
              console.log('Tarefa excluída:', response.data);
              setTarefas(tarefas.filter(t => t.id !== id));
          })
          .catch(error => {
              console.error('Erro ao excluir tarefa:', error);
          });
  };  

    return (
        <>
            <GlobalStyles />
            <Cabecalho />
            <TarefaInput aoAdicionar={adicionarTarefa} />
            <TarefaLista tarefas={tarefas} aoAlternar={alternarTarefa} aoExcluir={excluirTarefa} />
        </>
    );
}

export default App;
