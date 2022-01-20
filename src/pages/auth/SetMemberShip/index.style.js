import styled from "styled-components";
import { SetMemberShipMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(SetMemberShipMainLayOut)``;

export const ProfileContainer = styled.div`
    h2 {
        margin: 30px 0 12px;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #767676;
        margin-bottom: 30px;
        text-align: center;
        }
`;

export const EmailPwWrapper = styled.div`
    display : none;
`;
