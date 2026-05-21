import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259D;
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;
  transition: opacity 0.2s ease-in-out; /* Suaviza o efeito de hover */

  /* Aplica o hover apenas se o botão NÃO estiver desativado */
  &:not(:disabled):hover {
    opacity: 0.6;
    cursor: pointer;
  }

  /* Estilização profissional para o estado desativado */
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background-color: #a663ba; /* Tom mais claro/opaco para indicar bloqueio */
    border-color: #a663ba;
  }
`;
