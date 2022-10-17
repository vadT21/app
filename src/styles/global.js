import { 
  createGlobalStyle,
} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html, body {
    width: 100%;
    height: 100%;
  }


  #root {
    font-family: ${({theme}) => theme.fontFamily};
    background-color: ${({theme}) => theme.colors.bgColor};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items : center;
  }
`;