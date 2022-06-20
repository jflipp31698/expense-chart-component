import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.google.com/specimen/DM+Sans');

    :root{
        --soft-red: hsl(10, 79%, 65%);
        --cyan: hsl(186, 34%, 60%);
        --dark-brown: hsl(25, 47%, 15%);
        --medium-brown: hsl(28, 10%, 53%);
        --cream: hsl(27, 66%, 92%);
        --pale-orange: hsl(33, 100%, 98%);
    }

    body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--cream);
        font-family: "DM Sans", sans-serif;
    }
`