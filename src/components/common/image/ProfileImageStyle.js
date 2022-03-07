//프로필 이미지 컴포넌트입니다.
import styled from "styled-components";
import Upload from "../../../asset/upload-file.png";

export const ProfileImage = styled.img`
    width: 110px;
    height: 110px;
    border: 0.5px solid #dbdbdb;
    border-radius: 50%;
    margin-bottom: 16px;
`;
export const ProfileImgWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;

    label {
        position: relative;
        display: block;
        width: 110px;
        height: 110px;
        margin: 0 auto 30px;
        border: 1px solid #dbdbdb;
        border-radius: 50%;
        cursor: pointer;
        &::after {
            position: absolute;
            content: "";
            right: 0;
            bottom: 0;
            width: 36px;
            height: 36px;
            background: #c4c4c4 url(${Upload}) no-repeat center / 36px 36px;
            border-radius: 50%;
        }

    img {
        width: 110px;
        height: 110px;
    }

    input {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    // 기본값
    padding: 0;
    }
`;