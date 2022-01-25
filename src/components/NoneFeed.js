// Nonefeed 컴포넌트입니다.
import React from "react";
import styled from "styled-components";
import GrayLogo from "../asset/symbol-logo-gray.png";

export const NoneFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    p {
        color: #767676;
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        font-weight: 400;
        &::before {
        content: "";
        display: block;
        width: 100px;
        height: 100px;
        background-image: url(${GrayLogo});
        margin: 0 auto 20px;
        }
    }
`;
