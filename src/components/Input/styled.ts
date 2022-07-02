import styled from "styled-components";

export const ConteinerInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #6b6565;
  }

  input {
    box-sizing: border-box;
    border: 1px solid #6b6565;
    border-radius: 5px;
    padding: 5px;

    :focus {
      border: 1px solid #010852;
      box-shadow: 0 0 0 1px #010852;
    }
  }
`;
