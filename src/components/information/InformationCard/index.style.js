import styled from "styled-components";

export const InformationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid ${props => props.theme.palette["border"]};
  &:last-child {
    border-bottom: none;
  }
`;

export const InformationWrapper = styled.article`
  max-width: 800px;
  width: 100%;
`;

export const InformationLink = styled.a.attrs({ target: "_blank" })`
  display: flex;
`;

export const InformationImg = styled.img`
  width: 160px;
  height: 105px;
  border-radius: 8px;
  object-fit: cover;
  background: ${props => props.theme.palette["border"]};
`;

export const InformationInfoWrapper = styled.div`
  width: calc(100% - 160px);
  min-width: 275px;
  margin-left: 20px;
`;

export const InformationInfo = styled.span`
  display: inline-block;
  font-size: 12px;
  color: ${props => props.theme.palette["main"]};
`;

export const InformationDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 13px;
  color: ${props => props.theme.palette["main"]};
  margin-top: 8.5px;
  &::before {
    content: "·";
    margin: 0 4px;
  }
`;

export const InformationTitle = styled.strong`
  display: block;
  margin: 5px 0 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: ${props => props.theme.palette["main"]};
  }
`;

export const InformationText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  color: ${props => props.theme.palette["subText"]};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
