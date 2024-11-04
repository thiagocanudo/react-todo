import styled from 'styled-components';

export const StyleTask = styled.div `


    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ccc;

    &:hover {
      background: #efefef;
    }

    p {
      flex-grow: 1; // ocupa toda a largura disponivel
      line-height: 20px;
      box-sizing: border-box;
      font-size: 18px;
    }

    button {
      width: 35px;
      border: 0;
      font-size: 30px;
      font-weight: 500;
      color: #FF5555;
      background: none;
      cursor: pointer;

      &:hover {
        font-weight: 700;
        }
    }

`