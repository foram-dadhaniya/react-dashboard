// Global styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  body.light-theme {
    background-color: #0000;
    color: black;
  }

  body.dark-theme {
    background-color: #00020a;
    color: white;
  }
    
  a {
    text-decoration: none;
    color: inherit;
  }
  
  .concepts{
        right: 15px;
        position: fixed;
        bottom: 0;
    p{
      color: white;
    }
    .conceptsBlock{
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: white;
        padding: 15px;
        color: white;
        position: absolute;
        bottom: 35%;
        width: max-content;
        left: -105%;
    }
  }
`;

