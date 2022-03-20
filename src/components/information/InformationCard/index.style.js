import styled from "styled-components";

export const InformationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 1.25rem;
  border-bottom: 1px solid ${props => props.theme.palette["border"]};
  &:last-child {
    border-bottom: none;
  }
`;

export const InformationWrapper = styled.article`
  max-width: 50rem;
  width: 100%;
  &:hover {
    opacity: 0.5;
  }
`;

export const InformationLink = styled.div`
  display: flex;
`;

export const InformationImg = styled.img`
  width: 14rem;
  height: 6.8rem;
  border-radius: 8px;
  object-fit: cover;
  background: ${props => props.theme.palette["border"]};
  margin-right: 1.25rem;

  @media only screen and (max-width: 750px) {
    width: 9.25rem;
    margin-right: 1rem;
  }
`;

export const InformationInfoWrapper = styled.div`
  width: calc(100% - 10rem);
  min-width: 50%;
`;

export const InformationInfo = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${props => props.theme.palette["main"]};
`;

export const InformationDate = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.2;
  color: ${props => props.theme.palette["main"]};
  margin-top: 0.5rem;
  &::before {
    content: "·";
    margin: 0 .25rem;
  }
`;

export const InformationTitle = styled.strong`
  display: block;
  margin: 5px 0 10px;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InformationText = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  overflow: hidden;
  color: ${props => props.theme.palette["subText"]};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
