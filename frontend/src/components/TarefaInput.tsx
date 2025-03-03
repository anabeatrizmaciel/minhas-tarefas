import { useState } from 'react';
import styled from 'styled-components';

interface Props {
    aoAdicionar: (titulo: string) => void;
}

export default function TarefaInput({ aoAdicionar }: Props) {
    const [titulo, setTitulo] = useState('');

    const adicionar = () => {
        if (titulo.trim()) {
            aoAdicionar(titulo);
            setTitulo('');
        }
    };

    return (
        <Container>
            <Input
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <Botao onClick={adicionar}>Criar</Botao>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    gap: 8px;
    padding: 16px;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const Botao = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;
`;
