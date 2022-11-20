import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --red: #e52e40;
    --blue: #5429cc;
    --green: #33cc95;
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

.react-modal-overlay{
    background: rgba(0, 0, 0 ,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

}

.react-modal-close{

    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    &:hover{
        filter: brightness(0.9);
    }
    
}


`