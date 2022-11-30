import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F0F4F7;
    font-family: 'Courier New', Courier, monospace;
  }

  h1 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  button {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
  }
`