import styled from "styled-components";

export const InformationList = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const InformationImgWrapper = styled.div`
  height: 100%;
  align-self: flex-start;
`;

export const InformationImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  background: ${props => props.theme.palette["border"]};
  object-fit: cover;
`;

export const InformationInfoWrapper = styled.div`
  margin-left: 15px;
  width: calc(100% - 118px);
  height: 100%;
  align-self: flex-start;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.palette["border"]};

  strong {
    font-size: 12px;
    color: ${props => props.theme.palette["subText"]};
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    color: ${props => props.theme.palette["subText"]};
    margin-top: 8.5px;
    &::before {
      content: "·";
      margin: 0 4px;
    }
  }
`;

export const InformationTitle = styled.h4`
  display: block;
  margin: 5px 0 14px;
  line-height: 1.2;
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
