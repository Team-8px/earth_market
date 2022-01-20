//프로필 컴포넌트입니다.
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EllipseImg from "../asset/Ellipse-1.png";
import { ProfileImage } from "./common/image/ProfileImageStyle";

const UserInfoContainer = styled.header`
    display: flex;
    justify-content: center;
    border-bottom: 0.5px solid;
    background-color: #fff;
    margin-bottom: 6px;
`;
const UserInfoWrapper = styled.div`
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
const UserName = styled.strong`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 6px;
`;
const AccountName = styled.strong`
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
const Intro = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    margin-bottom: 24px;
`;
const FollowerWrapper = styled(Link)`
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

const FollowingWrapper = styled(Link)`
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

function UserInfo({
username,
accoutname,
intro,
followerCount,
followingCount,
}) {
    return (
        <UserInfoContainer>
            <UserInfoWrapper>
            <h1>유저 프로필</h1>
            <ProfileImage>
            <img src={EllipseImg} alt="프로필 사진" />
            </ProfileImage>
            <UserName>{username}</UserName>
            <AccountName>{accoutname}</AccountName>
            <Intro>{intro}</Intro>
            <FollowerWrapper>
                <strong>{followerCount}</strong>
                <span>followers</span>
            </FollowerWrapper>
            <FollowingWrapper>
                <strong>{followingCount}</strong>
                <span>following</span>
            </FollowingWrapper>
        </UserInfoWrapper>
        </UserInfoContainer>
    );
}

export default UserInfo;