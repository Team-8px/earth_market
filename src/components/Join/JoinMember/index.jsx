import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../../constants/defaultUrl";
import {
  JoinMemberForm,
  JoinMemberFieldset,
  JoinMemberTitle,
  JoinMemberInputWrapper,
  JoinMemberLabel,
  JoinMemberInput,
  ErrorMessage,
  JoinMemberBtn,
} from "./index.style";

const JoinMember = ({ setNextPage, setUserInfo }) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (emailErrorMessage) setEmailErrorMessage("");
  }, [getValues().email]);

  const getEmailValid = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const reqData = {
      user: { email: getValues().email },
    };
    const { data } = await axios.post(
      `${API_URL}/user/emailvalid`,
      reqData,
      config,
    );

    return data;
  };

  const onSubmit = async ({ email, password }) => {
    if (isValid) {
      try {
        const response = await getEmailValid();

        if (response.message === "사용 가능한 이메일 입니다.") {
          setNextPage(false);
          setUserInfo({ email, password });
        }
        if (response.message === "이미 가입된 이메일 주소 입니다.") {
          setEmailErrorMessage(response.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <JoinMemberForm onSubmit={handleSubmit(onSubmit)}>
      <JoinMemberFieldset>
        <JoinMemberTitle>이메일로 회원가입</JoinMemberTitle>
        <JoinMemberInputWrapper>
          <JoinMemberLabel>
            이메일
            <JoinMemberInput
              name="email"
              id="email"
              type="email"
              placeholder="이메일 주소를 입력해 주세요."
              autoComplete="off"
              spellCheck="false"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            {errors?.email?.type === "required" && (
              <ErrorMessage>* 필수 입력사항입니다.</ErrorMessage>
            )}
            {errors.email?.type === "pattern" && (
              <ErrorMessage>*올바르지 않은 이메일 형식입니다.</ErrorMessage>
            )}
            {emailErrorMessage && (
              <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            )}
          </JoinMemberLabel>
          <JoinMemberLabel>
            비밀번호
            <JoinMemberInput
              name="password"
              id="password"
              type="password"
              spellCheck="false"
              placeholder="비밀번호를 설정해 주세요."
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors?.password?.type === "required" && (
              <ErrorMessage>* 필수 입력사항입니다.</ErrorMessage>
            )}
            {errors.password?.type === "minLength" && (
              <ErrorMessage>* 비밀번호는 6자 이상이어야 합니다.</ErrorMessage>
            )}
          </JoinMemberLabel>
        </JoinMemberInputWrapper>
        <JoinMemberBtn disabled={!isValid}>다음</JoinMemberBtn>
      </JoinMemberFieldset>
    </JoinMemberForm>
  );
};

export default JoinMember;
