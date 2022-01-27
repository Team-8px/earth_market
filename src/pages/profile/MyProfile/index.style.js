import styled from "styled-components";
import { ProfileMainLayOut } from "../../../components/MainLayOut";
export const MainLayOut = styled(ProfileMainLayOut)``;

export const ProductContainer = styled.section`
    display: flex;
    justify-content: center;
    border-top: 0.5px solid #dbdbdb;
    border-bottom: 0.5px solid #dbdbdb;
    background-color: #fff;
`;

export const ProductWrapper = styled.article`
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
export const ProfileLayOut = styled.header`
    display: flex;
    justify-content: center;
    border-bottom: 0.5px solid var(--border-color);
`;
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

    img {
    margin-bottom: 16px;
    }
`;
export const UserName = styled.strong`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 6px;
`;
export const UserAccountName = styled.strong`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 16px;
    &::before {
        content: "@";
        margin-right: 3px;
    }
`;
export const Intro = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    margin-bottom: 24px;
`;
export const FollowerWrapper = styled.a`
    position: absolute;
    left: 56px;
    top: 65px;
    text-align: center;
    cursor: pointer;

    strong {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 6px;
    }

    span {
        font-size: 10px;
        color: #767676;
        }
`;

export const FollowingWrapper = styled.a`
    position: absolute;
    left: 287px;
    top: 65px;
    text-align: center;
    cursor: pointer;

    strong {
        display: block;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 6px;
        }

    span {
        font-size: 10px;
        color: #767676;
        }
`;