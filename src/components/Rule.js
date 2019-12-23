import styled from "styled-components";

const Rule = styled.li`
  &::before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    background: url("https://image.flaticon.com/icons/png/512/179/${({ pass }) => (pass ? "179372" : "179429")}.png")
      center/cover no-repeat;
    left: 0;
    margin-top: 5px;
  }
`;

export default Rule;
