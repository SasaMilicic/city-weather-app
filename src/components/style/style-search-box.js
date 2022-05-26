import styled from 'styled-components';

export const StSearchBox = styled.aside`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  width: 18vw;
  min-width: 250px;
  height: 500px;
  @media (max-width: 800px) {
    display: none;
  }

  ol {
    padding-right: 10px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 800;
  }

  svg {
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
  }

  .error {
    color: red;
    font-weight: 900;
  }
`;
