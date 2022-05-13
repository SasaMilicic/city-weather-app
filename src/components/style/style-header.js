import styled from 'styled-components';

export const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(100, 100, 255, 0.6);
  border-radius: 20px;
  padding: 0px 50px;
  p {
    font-size: 18px;
    font-weight: 900;
  }

  .error {
    color: red;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px 10px;
    border-radius: 20px;
  }
`;
