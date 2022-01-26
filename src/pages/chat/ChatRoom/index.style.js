import styled from "styled-components";
import { ChatRoomMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(ChatRoomMainLayOut)``;

export const ChatRoomLayOut = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 16px;
    min-height: 100%;
`;

export const ChatRoomContainer = styled.section`
    position: relative;
    display: flex;
    margin-bottom: 9px;
`;
export const UserImgWrapper = styled.div`
    width: 42px;
    height: 42px;
    border: 0.5px solid #dbdbdb;
    border-radius: 50%;
    margin-right: 12px;
    overflow: hidden;

    img{
        height: 100%;
        object-fit: cover;
    }
`;
export const UserMsgWrapper = styled.div`
    display: flex;
    gap: 6px;

    p{
        max-width: 240px;
        padding: 12px;
        background-color: #FFF;
        border: 1px solid #C4C4C4;
        border-radius: 10px;
        border-top-left-radius: 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }

    strong{
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        color: #767676;
        align-self: flex-end;
    }
`;

