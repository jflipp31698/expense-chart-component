import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --soft-red: hsl(10, 79%, 65%);
        --cyan: hsl(186, 34%, 60%);
        --dark-brown: hsl(25, 47%, 15%);
        --medium-brown: hsl(28, 10%, 53%);
        --cream: hsl(27, 66%, 92%);
        --pale-orange: hsl(33, 100%, 98%);
        font-family: 'DM Sans', sans-serif;
        font-size: 18px;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--cream);
    }

    img{
        width: 70px;
        height: 70px;
    }

    p{
        opacity: 0.4;
    }

    h3{
        margin-bottom: 2em;
    }

    h4{
        font-weight: 400;
    }

    span{
        font-weight: 700;
        text-align: right;
    }

    .day{
        text-align: center;
        margin-top: 5px;
        font-size: 14px;
    }

    hr{
        height: 2px;
        background-color: var(--cream);
        border: none;
        margin: 1em 0em;
    }
`