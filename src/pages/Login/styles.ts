import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; 
  min-height: 100vh; /* Permite que o fundo cresça caso a tela seja muito pequena */
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #f4f4f4; /* Uma cor de fundo opcional para contrastar com o card branco */
  //  background-color: #F3E8FF; /* Novo tom: Lilás bem clarinho e moderno */
  background-color: #5e0c94;
  padding: 20px; /* Evita que o card encoste nas bordas em celulares */
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 30px; /* Aumentado para dar mais respiro ao formulário */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05); /* Sombra suave profissional */
  
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 36px; /* 42px costuma quebrar linha em celulares muito pequenos */
  font-weight: 700;
  color: #81259D;
  margin-bottom: 10px;
  align-self: center; /* Centraliza apenas o título se desejar */
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px; /* Substitui o uso de componentes vazios de Spacing */
`;

/* O Spacing foi descontinuado em favor da propriedade 'gap' no Column */
