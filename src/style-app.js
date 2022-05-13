import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import img from './img/background.jpg';

export const StApp = styled.div`
  text-align: center;
  width: 90%;
  margin: auto;
  height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 20px;

  main {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const GlobalStyle = createGlobalStyle`
body{
  background-image: url(${img});
  background-size: cover;
}  
`;
