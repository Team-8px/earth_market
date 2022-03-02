import styled from "styled-components";

export const UserInfoContainer = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
  background-color: #fff;
  margin-bottom: 6px;
`;
