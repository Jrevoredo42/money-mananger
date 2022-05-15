import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --red: #e52e40;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
    --background: #f0f2f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// porcentagem padrão para o tamanho das fontes  nas respectivas telas de 15px e 14px 
html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button{
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}


`