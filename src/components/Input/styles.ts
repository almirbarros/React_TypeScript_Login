import styled from 'styled-components';

export const InputContainer = styled.div<{ $hasError?: boolean }>`
    width: 100%;
    height: 42px;
    color: #FFF;

    /* Muda a cor da borda para vermelho caso exista um erro */
    border: 1px solid ${props => props.$hasError ? '#FF0000' : '#81259D'};
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    display: flex;
    align-items: center;
    transition: border-color 0.2s ease-in-out; /* Suaviza a troca de cor da borda */
    
    & input {
        width: 100%;
        height: 100%; /* Ajustado para 100% para respeitar o padding do container */
        background-color: transparent;
        border: 0;
        outline: none;
        color: #333; /* Ajuste se o texto do input precisar de outra cor */
    }
`;

export const ErrorMessage = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin-top: 8px;
    margin-left: 10px;
`;
