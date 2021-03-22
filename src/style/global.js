import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Do Hyeon', sans-serif;
  }

  .page {
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
`
export default GlobalStyle
