import styled from 'styled-components';

export const ContainerList = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 5px 5px 10px #ddd;
  box-sizing: border-box;
  border-radius: 10px;

  form {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;

    input {
      flex-grow: 1; // ocupa toda a largura disponivel
      height: 54px;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #cccccc;
      box-sizing: border-box;
      font-size: 18px;
    }

    button {
      width: 105px;
      border: 0;
      border-radius: 6px;
      font-size: 18px;
      color: #fff;
      background: #001d29;
      cursor: pointer;

      &:hover {
        background-color: #02080e;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;
