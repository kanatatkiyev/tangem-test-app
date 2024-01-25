import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 200vh;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        line-height: 20.8px;
    }

    #root {
        height: 100%;
    }

    button {
        outline: none;
        border: none;
        background: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
