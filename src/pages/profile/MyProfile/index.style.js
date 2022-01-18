import styled from "styled-components";
import { ProfileMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(ProfileMainLayOut)``;

export const UserInfoContainer = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid;
  background-color: #fff;
  margin-bottom: 6px;
`;
export const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 16px 26px;
`;

export const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const ProductWrapper = styled.div`
  padding: 20px 0 20px 16px;
  max-width: 390px;
  width: 100%;
`;

export const UserPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
`;
export const UserPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 16px 16px 70px;
`;
