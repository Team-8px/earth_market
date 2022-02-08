import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../../actions/userActions";
import { imageUploadsHandler } from "../../../util/imageUploads";
import styled from "styled-components";
import Upload from "../../../asset/upload-file.png";
import EllipseImg from "../../../asset/Ellipse-1.png";

const ProfileImgWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 16px;

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

function ProfileUpload() { 
    const { register } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async data => {
        const { profileImg } = data;
        const image = await imageUploadsHandler(profileImg[0]);
        dispatch(updateUserProfile(image));
    };

    return (
        <ProfileImgWrapper>
        <label>
            <img src={EllipseImg} alt="프로필 사진" />
            <input
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                name="profileImg"
                {...register("profileImg")}
            ></input>
        </label>
        </ProfileImgWrapper>
    );
};

export default ProfileUpload;