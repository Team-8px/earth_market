import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../../actions/userActions";

// 공통요소
const FormContainer = styled.form`
    box-sizing: border-box;
`;

const EmailWrapper = styled.div`
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

const PwWrapper = styled.div`
    margin-bottom: 30px;

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

function LoginForm() { 
    const { register} = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {
        const { email, password } = data;
    
        dispatch(login(email, password));
    };

    return (
        <FormContainer>
            <EmailWrapper>
            <label>이메일</label>
            <input
                name="email"
                type="email"
                {...register("email")}
            />
            </EmailWrapper>
            <PwWrapper>
            <label>비밀번호</label>
            <input
                name="password"
                type="password"
                {...register("password")}
            />
            </PwWrapper>
        </FormContainer>
    )
}

export default LoginForm;