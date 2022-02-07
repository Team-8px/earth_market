import React from "react";
import styled from "styled-components";
import UserInfoBox from "../../module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../../module/post/ContentBox";
import IconBox from "../../module/post/IconBox";
import Date from "../../module/post/Date";
import DisplayButton from "../../module/profile/DisplayButton";
import testImg2 from "../../../asset/8px.png";
import more from "../../../asset/icon-more-vertical.svg";

// myProfile 부분입니다.
// yourProfile 부분입니다.

const Profile = () => {
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>
        {/* <UserInfo></UserInfo> */}
        {/* <Product></Product> */}
        <PostContainer>
          <DisplayButton></DisplayButton>
          <PostWrapper>
            <Container>
              <UserInfoBox name="text" id="id" />
              <ContentBox content="content">
                <ImgContainer>
                  <ImgList>
                    <img src={testImg2} alt="testImg2" />
                  </ImgList>
                  <ButtonList>
                    <button></button>
                  </ButtonList>
                </ImgContainer>
                <IconBox like="9999" comment="9999" />
                <Date>2022년 2월 4일</Date>
              </ContentBox>
              <MoreBtn />
            </Container>
          </PostWrapper>
        </PostContainer>
      </LayOut>
      {/* <Navigation></Navigation> */}
    </>
  );
};

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const PostContainer = styled.section`
  ${props => props.theme.common["flexCenterColumn"]}
  margin-bottom: 0;
`;

const PostWrapper = styled.div`
  ${props => props.theme.common["flexCenterColumn"]}
  max-width: 390px;
  width: 100%;
  padding: 16px 16px 70px;
`;

const Container = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin-bottom: 20px;
`;

const MoreBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${more}) no-repeat center / 18px 18px;
  background-color: inherit;
`;

export default Profile;
