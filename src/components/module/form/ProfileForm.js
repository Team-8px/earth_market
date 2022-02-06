import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../../actions/userActions";

const FormContainer = styled.form`
  box-sizing: border-box;
`;

const ProfileFormWrapper = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;

  label {
  display: block;
  color: #767676;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 10px;
  }
  input {
  width: 100%;
  font-size: 14px;
  font-color: #dbdbdb;
  line-height: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  }
`;

function ProfileForm() { 
  const { register} = useForm();

  const dispatch = useDispatch();

  const onSubmit = async data => {
    const { username, accountname, intro } = data;
    
    dispatch(updateUserProfile(username, accountname, intro));
  };

  return (
    <FormContainer>
      <ProfileFormWrapper>
        <label>사용자 이름</label>
          <input
            name="username"
            type="text"
            placeholder="2~10자 이내여야 합니다."
            {...register("username")}
          />
      </ProfileFormWrapper>
      <ProfileFormWrapper>
        <label>계정 ID</label>
          <input
            name="accountname"
            type="text"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            {...register("accountname")}
          />
      </ProfileFormWrapper>
      <ProfileFormWrapper>
        <label>소개</label>
          <input
            name="intro"
            type="text"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            {...register("intro")}
          />
      </ProfileFormWrapper>
    </FormContainer>
  );
};

export default ProfileForm;