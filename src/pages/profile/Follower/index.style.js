import styled from "styled-components";

export const UserListContainer = styled.ul`
  max-width: 390px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export const UserListWrapper = styled.li`
  margin-bottom: 16px;

  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    font-size: 10px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  // 테스트용 백그라운드
  background-color: #567;
`;


export const UserInfoWrapper = styled.div`
  margin-left: 12px;
  align-self: flex-start;

  a {
    width: 100%;
  }

  strong {
    display: block;
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
  }
`;
