import styled from "styled-components";
import { SearchMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(SearchMainLayOut)``;

export const UserListContainer = styled.ul`
    max-width: 390px;
    width: 100%;
`;

export const UserListWrapper = styled.li`
    margin-bottom: 16px;
    
    a {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    }

    img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    font-size: 10px;
    overflow: hidden;
    }
`;

export const UserInfoWrapper = styled.div`
    margin-left: 12px;
    width: calc(100% - 118px);
    height: 100%;
    align-self: flex-start;
`;

export const UserName = styled.strong`
    display: block;
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;

    span {
    color: #f26e22;
    }
`;

export const UserId = styled.strong`
    color: #767676;
    font-size: 12px;
    line-height: 15px;
    &::before {
        content: "@";
        margin-right: 3px;
    }
`;
