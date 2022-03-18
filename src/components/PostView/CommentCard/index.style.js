import styled from "styled-components";

export const ProfileLinkImg = styled.img`
  margin-right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
`;

export const SubmitChatLayOut = styled.section`
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 390px;
  width: 100%;
  border-style: none;
  border-top: 0.5px solid ${props => props.theme.palette["border"]};
  background-color: #fff;
`;

export const SubmitChatContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 60px;
  padding: 0 16px;
`;

export const SubmitChatLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 3px;
  color: transparent;
  margin: 0 16px;
`;

export const SubmitChatInput = styled.input`
  display: block;
  width: 100%;
  border-style: none;

  &::placeholder {
    color: ${props => props.theme.palette["border"]};
  }
`;

export const SubmitChatButton = styled.button`
  display: block;
  width: 80px;
  border-style: none;
  cursor: pointer;
  color: ${props => props.theme.palette["lightGray"]};
  &:focus {
    color: ${props => props.theme.palette["main"]};
  }
`;
