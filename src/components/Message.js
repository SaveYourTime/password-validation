import styled from "styled-components";

const Message = styled.div`
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  margin-left: 18px;
  padding: 28px;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 38, 38);

  & > h2 {
    color: rgb(0, 255, 20);
    margin: 0;
    position: relative;
  }

  & > h2::before {
    content: "";
    position: absolute;
    top: -3px;
    width: 28px;
    height: 3px;
    background: rgb(0, 255, 20);
  }

  & > ul {
    line-height: 30px;
    list-style-type: none;
    position: relative;
  }
`;

export default Message;
