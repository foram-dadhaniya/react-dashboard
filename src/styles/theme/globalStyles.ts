// Global styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. Root container */
  :root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* 2. CSS Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 3. Theme CSS */
  body[data-theme='light'] {
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
    --concept-block-bg: #19181a;
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
    --concept-block-bg: #f5f6fa;
  }

  /* 4. CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 5. Body base */
  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }
    
  /* 6. Links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 7. Utility classes (optional) */
  .hidden {
    display: none !important;
  }

  
  .icon{
    color: var(--sidebar-prime-color);
  }
  


  .concepts{
        right: 15px;
        position: fixed;
        bottom: 0;
    p{
      color: var(--text-color);
    }
    .conceptsBlock{
        background: var(--background-color);
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: var(--text-color);
        padding: 15px;
        position: absolute;
        bottom: 55%;
        width: max-content;
        left: -105%;
    }
  }
`;

