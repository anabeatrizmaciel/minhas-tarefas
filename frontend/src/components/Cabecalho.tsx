import styled from 'styled-components';

export default function Cabecalho() {
    return (
        <Container>
            <Logo>📘 Minhas Tarefas</Logo>
        </Container>
    );
}

const Container = styled.header`
    background-color: #f8f9fa;
    padding: 24px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 10;
`;

const Logo = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #2a2d34;
    letter-spacing: -0.5px;
    font-family: 'Inter', sans-serif;
`;
