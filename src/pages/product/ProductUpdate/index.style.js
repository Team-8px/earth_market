import styled from "styled-components";
import { ProductUpdateMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(ProductUpdateMainLayOut)``;

export const ProductUpdateForm = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;
export const ProductUpdateLabel = styled.label`
  display: block;
  color: #767676;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 10px;
`;
export const ProductUpdateInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
`;

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;
`;
