// Search 부분 Userlist 입니다.
import React from "react";
import styled from "styled-components";
import EllipseImg from "../asset/Ellipse-1.png";

const UserListContainer = styled.ul`
    max-width: 390px;
    margin: 0 auto;
    padding: 24px 16px;
`;

const UserListWrapper = styled.li` 
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const UserImgWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    font-size: 10px;
    overflow: hidden;
    
    img {
        height: 100%;
        object-fit: cover;
        }
`;

const UserInfoWrapper = styled.div`
    margin-left: 12px;
    height: 100%;
    align-self: flex-start;
`;

const UserName = styled.strong`
    display: block;
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
`;

const UserId = styled.strong`
    color: #767676;
    font-size: 12px;
    line-height: 15px;
    &::before {
        content: "@";
        margin-right: 3px;
    }
`;

function UserList({

}) {
    return (
        <UserListContainer>
            <UserListWrapper>
            <UserImgWrapper>
                <img src={EllipseImg} alt="프로필 사진" />
            </UserImgWrapper>
            <UserInfoWrapper>
                <UserName>
                    <strong>유저네임</strong>
                </UserName>
                <UserId>
                    <strong>유저아이디</strong>
                </UserId>
            </UserInfoWrapper>
            </UserListWrapper>
        </UserListContainer>
    )
}

export default UserList;