import styled from 'styled-components';
import ItemTarefa from './ItemTarefa';
import { Tarefa } from '../types/tarefa';

interface Props {
    tarefas: Tarefa[];
    aoAlternar: (id: number) => void;
    aoExcluir: (id: number) => void;
}

export default function TarefaLista({ tarefas, aoAlternar, aoExcluir }: Props) {
    return (
        <Container>
            <Titulo>📋 Tarefas Criadas</Titulo>
            {tarefas.length === 0 ? (
                <Vazio>Nenhuma tarefa cadastrada.</Vazio>
            ) : (
                tarefas.map(tarefa => (
                    <ItemTarefa
                        key={tarefa.id}
                        tarefa={tarefa}
                        aoAlternar={aoAlternar}
                        aoExcluir={aoExcluir}
                    />
                ))
            )}
        </Container>
    );
}

const Container = styled.div`
    background-color: #ffffff;
    padding: 24px;
    margin: 32px auto;
    width: 90%;
    max-width: 600px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e6e8eb;
`;

const Titulo = styled.h2`
    color: #2a2d34;
    font-size: 22px;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
`;

const Vazio = styled.p`
    color: #6c757d;
    font-size: 14px;
    text-align: center;
`;
