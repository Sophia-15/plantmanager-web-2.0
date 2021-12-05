import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
    text-decoration: none;
  }

  html {
    background-color: ${({theme}) => theme.colors.background};
    transition: all 0.3s;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.green};
    border-radius: 6px;
  }

  //Global medias
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 760px) {
    html {
      font-size: 77.5%;
    }
  }

  @media (max-width: 630px) {
    html {
      font-size: 67.5%;
    }
  }

  @media (max-width: 550px) {
    html {
      font-size: 57.5%;
    }
  }
`;
