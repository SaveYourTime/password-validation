import styled from "styled-components";

const PasswordInput = styled.input`
  outline: 0;
  padding: 10px 14px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;

  &:focus {
    border-color: #85b7d9;
  }
`;

export default PasswordInput;
