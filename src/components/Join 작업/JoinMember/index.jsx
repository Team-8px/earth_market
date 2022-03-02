import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import axios from "axios";
import { joinMembership } from "../../../actions/userActions";
import { API_URL } from "../../../constants/defaultUrl";
//스타일
import { JoinMemberForm, JoinMemberFieldset,JoinMemberTitle, JoinMemberInputWrapper, JoinMemberLabel, JoinMemberInput, ErrorMessage, JoinMemberBtn} from "./index.style";

export default function JoinMember({setPage, setUserInfo}) {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
      mode: "onChange"
  });

  useEffect(() => {
    if (emailErrorMessage) setEmailErrorMessage("");
    }, [getValues().email]);
  const onSubmit = async (data) => {
    const response = await axios.post(`${API_URL}/user/emailvalid`, {
      headers: {
        'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      user: {
        email: data.email,
      },
    }),
  });
  if (response.data.message === "이미 가입된 이메일 주소 입니다.") {
    setEmailErrorMessage(response.data.message);
  } else {
    setUserInfo({ email: data.email, password: data.password });
    setPage(false);
  }
};
//   const getEmailValid = async () => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     };
//     const reqData = {
//       user: { email: getValues().email },
//     };
//     const {data} = await axios.post(
//       `${API_URL}/user/emailvalid`, 
//       reqData, 
//       config,
//     );

//     return data;
//   };

//   const nextPageHandler = async () => {
//     if (isValid) {
//       try {
//         const response = await getEmailValid();

//         if (response.message === "사용 가능한 이메일 입니다.") {
//           setNextPage(false);
//         }
//         if (response.message === "이미 가입된 이메일 주소 입니다.") {
//           setEmailErrorMessage(response.message);
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const onSubmit = async data => {
//     try {
//       const { email,password,username,accountname,intro }= getValues();
//       // const image = await imageUploadsHandler(profileImg[0]);
//       if (isValid) {
//         try {
//           const response = await getAccountNameValid();
//           if (response.message === "사용 가능한 계정ID 입니다.") {
//             dispatch(
//               joinMembership(
//                 email, 
//                 password, 
//                 username, 
//                 accountname, 
//                 intro,
//               ),
//             );
//           }
//           if (response.message === "이미 가입된 계정ID 입니다.") {
//             setAccountIdErrorMessage(response.message);
//           }
//         } catch (e) {
//           console.log(e);
//         }
//       }
//     } catch (e) {
//       console.log(e);
//   }
// };
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
          {emailErrorMessage && <p>{emailErrorMessage}</p>}
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
        <JoinMemberBtn
          disabled={!isValid}
        >
          다음
        </JoinMemberBtn>
      </JoinMemberFieldset>
    </JoinMemberForm>
  );
};
