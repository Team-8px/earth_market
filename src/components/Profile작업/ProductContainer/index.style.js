import styled from "styled-components";
export const ProductSection = styled.section`
  border-top: 0.5px solid ${props => props.theme.palette["border"]};
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
  background-color: #fff;
  margin-bottom: 6px;
`;

export const ProductWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 358px;
`;
export const ProductCardList = styled.ul`
  display: flex;
  font-size: 12px;
  line-height: 12px;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 8px;
  }

  &:hover::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const ProductTitle = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 16px;
  font-weight: 700;
`;
