import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background-color: #81259D;
        -webkit-font-smoothing: antialiased; /* Melhora a renderização da fonte no Chrome/Safari */
        -moz-osx-font-smoothing: grayscale; /* Melhora a renderização da fonte no Firefox (Mac) */
    }

    /* Elementos que não herdam a fonte do body por padrão no HTML */
    input, button, textarea, select {
        font-family: inherit; /* Herda automaticamente 'Nunito' do body */
    }
`;
