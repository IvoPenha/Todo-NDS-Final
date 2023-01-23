import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #25294C;
        --secondary: #202342;
        --textPrimary: #333333;
        --textTerciary: #33333380;
        --textSecondary: #E9ECEF;
        --background: #E9ECEF;
        --brand: #27C498;
        --positive: #0D6EFD;
        --success: #198754;
        --warning: #FFC200;
        --danger: #DC3545;
        
    }
    body {
        height: 100vh;
        box-sizing: border-box;
        background: var(--background);
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        color: var(--textSecondary);
        
    }
`;

export default GlobalStyle;
