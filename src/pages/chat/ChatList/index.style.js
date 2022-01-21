import styled from "styled-components";
import { ChatListMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(ChatListMainLayOut)``;

export const ChatListContainer = styled.ul`
    width: 100%;
    max-width: 390px;
`;

export const ChatItemContainer = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const UserImgWrapper = styled.div`
    width: 42px;
    height: 42px;
    border: 0.5px solid #dbdbdb;
    border-radius: 50%;
    margin-right: 12px;

    img{
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const UserInfoWrapper = styled.strong`
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin: 2px 0 4px 0;
    
    p{
        max-width: 238px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #767676;
    }
`;

export const DateContainer = styled.strong`
    position: absolute;
    right: 0;
    bottom: 3px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: dbdbdb;
`;