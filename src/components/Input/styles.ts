import styled from 'styled-components';

export const InputContainer = styled.div<{ $hasError?: boolean }>`
    width: 100%;
    height: 42px;
    color: #333;

    border: 1px solid ${props => props.$hasError ? '#FF0000' : '#81259D'};
    border-radius: 21px;
    overflow: hidden;
    padding: 0 14px 0 18px; /* Mais espaço na esquerda e ajuste fino na direita */
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    transition: border-color 0.2s ease-in-out;
    
    & input {
        flex: 1; /* Faz o input ocupar todo o espaço restante antes do olho */
        height: 100%;
        background-color: transparent;
        border: 0;
        outline: none;
        color: #333;
        font-size: 14px;
    }
`;

export const TogglePasswordButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    color: #81259D; /* Mantém a identidade visual roxa */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #a663ba; /* Clarea levemente o ícone no hover */
    }
`;

export const ErrorMessage = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin-top: 8px;
    margin-left: 10px;
`;
