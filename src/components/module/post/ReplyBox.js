import React, { useState } from "react";
import styled from "styled-components";
import EllipseImg from "../../../asset/Ellipse-1.png";
import MoreButton from "../../../asset/icon/icon-more-vertical.png";

const CommentLayout = styled.section`
    max-width: 390px;
    padding: 20px 16px 0;
    margin: 0 auto;
`;

const CommentContainer = styled.ul`
    box-sizing: border-box;
    list-style: none;

    li {
    margin-bottom: 16px;
    position: relative;
    }
`;

const CommentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;

    img {
    margin-right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    }

    strong {
    margin: 6px 6px 0 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    }

    span {
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    color: #767676;
    margin-top: 8.5px;
    &::before {
        content: "·";
        margin-right: 4px;
        }
    }
`;

const CommentText = styled.p`
    padding-left: 48px;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
`;

// const CommentBox = styled.button`
//     content: "";
//     position: absolute;
//     top : 10px;
//     right: 0px;
//     width: 20px;
//     height: 20px;
//     background-image: url(${MoreButton});
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: contain;
// `;

export default function ReplyBox({ username }) {
    return (
        <CommentLayout>
            <CommentContainer>
                <CommentWrapper>
                    <img src={EllipseImg} alt="프로필 사진" />
                    <strong>맹지</strong>
                    <span>15분 전</span>
                </CommentWrapper>
                <CommentText>안녕하세요. 사진이 너무 멋있어요.</CommentText>
                {/* <CommentBox/> */}
            </CommentContainer>
        </CommentLayout>
    );
}