import styled from 'styled-components';

export const StWeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 3px;
  justify-content: space-evenly;
  background-color: rgba(100, 100, 255, 0.6);
  border-radius: 20px;
  width: 100%;
  padding: 5px;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 0px 4px 0px;
    font-size: 18px;
  }

  article {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    height: auto;
    padding: 5px;
  }

  h2 {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 0;
  }
`;
