import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #f5f5f5;
    color: #333;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  /* Mobile (até 600px) */
  @media (max-width: 600px) {
    body {
      font-size: 14px;
    }
  }

  /* Tablet (601px a 1024px) */
  @media (min-width: 601px) and (max-width: 1024px) {
    body {
      font-size: 15px;
    }
  }

  /* Desktop (acima de 1024px) */
  @media (min-width: 1025px) {
    body {
      font-size: 16px;
    }
  }
`

export default GlobalStyle
