import styled from 'styled-components';
import { Tarefa } from '../types/tarefa';

interface Props {
    tarefa: Tarefa;
    aoAlternar: (id: number) => void;
    aoExcluir: (id: number) => void;
}

export default function ItemTarefa({ tarefa, aoAlternar, aoExcluir }: Props) {
    return (
        <Container concluida={tarefa.concluida}>
            <Checkbox
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => aoAlternar(tarefa.id)}
            />
            <Titulo concluida={tarefa.concluida}>{tarefa.titulo}</Titulo>
            <BotaoExcluir onClick={() => aoExcluir(tarefa.id)}>🗑️</BotaoExcluir>
        </Container>
    );
}

const Container = styled.div<{ concluida: boolean }>`
    background-color: ${({ concluida }) => (concluida ? '#f0f4f8' : '#ffffff')};
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    margin-bottom: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: #f8f9fa;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

const Titulo = styled.span<{ concluida: boolean }>`
    flex: 1;
    font-size: 16px;
    color: #343a40;
    text-decoration: ${({ concluida }) => concluida ? 'line-through' : 'none'};
    font-family: 'Inter', sans-serif;
`;

const Checkbox = styled.input`
    cursor: pointer;
    width: 18px;
    height: 18px;
`;

const BotaoExcluir = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #e63946;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.2);
    }
`;
