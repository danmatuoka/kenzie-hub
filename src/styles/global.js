import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    :root {
        --white: #FFFFFF;
        --red: #dc2f02;
        --pink: #FF577F;
        --brightpink: #FF427F;
        --violet: #59323F;
        --black: #121214;
        --vanilla: #F8F9FA;
        --softgrey: #868E96;
        --mediumgrey: #343B41;
        --darkgrey: #212529;
    }

    h1, h2, h3, h4, h5, h6, p, span {
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: var(--black);
        color: var(--vanilla);
    }

    body, input, button, label {
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

`;
