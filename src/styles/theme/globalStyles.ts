// Global styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #f5f6fa;
    --text-color: #61748f;
    --input-bg: #fff;
    --input-color: #000;
    --border-color: #e2e6f1;
    --sidebar-bg: #fff;
    --sidebar-border-color: #e6eff1;
    --sidebar-prime-color: #61748f;
    --sidebar-logo-color: #61748f;
    --card-bg: #fff;
    --card-title-color: #222f36;
    --card-border-color: #e6eff1;
    --table-bg: #fff;
  }

  body[data-theme='dark'] {
    --background-color: #19181a;
    --text-color: rgba(255, 255, 255, 0.7);
    --input-bg: #333;
    --input-color: #fff;
    --border-color: #646464;
    --sidebar-bg: #232226;
    --sidebar-border-color: rgba(255, 255, 255, 0.1);
    --sidebar-prime-color: rgba(255, 255, 255, 0.7);
    --sidebar-logo-color: rgba(255, 255, 255, 0.7);
    --card-bg: #232226;
    --card-border-color: rgba(255, 255, 255, 0.1);
    --table-bg: #232226;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }
    
  a {
    text-decoration: none;
    color: inherit;
  }

  .icon{
    color: var(--sidebar-prime-color);
  }
  
  //theme toggle
  .theme-toggle{
    position: fixed;
    z-index: 1000;
    border-radius: 20px;
    color: var(--text-color);
    border: none;
    cursor: pointer;
    border-color: var(--border-color);
    top: 15px;
    right: 15px;
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

