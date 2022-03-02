import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import NavigationBar from "./hooks/useGNB";
import Navigation from "../src/components/template/common/Navigation";

//김현길 독립적인 라우트 2월 8일 데이터 바인딩 작업
import LoginEmailKHK from "./PAGE/LoginEmail";
import LoginMain from "./PAGE/LoginMain";
import HomeKHK from "./PAGE/Home";
import SearchKHK from "./PAGE/Search";
import MyprofileKHK from "./PAGE/MyProfile";
import ProductUploadKHK from "./PAGE/ProductUpload";
import PostUploadKHK from "./PAGE/PostUpload";
import ProfileUpdateKHK from "./PAGE/ProfileUpdate";
import FollowerListKHK from "./PAGE/FollowerList";
import FollowingListKHK from "./PAGE/FollowingList";
import PostViewKHK from "./PAGE/PostView";
import ProductUpdateKHK from "./PAGE/ProductUpdate";
import SetMemberShipKHK from "./PAGE/JoinProfile";
import YourProfile from "./PAGE/YourProfile";
import NotFound from "./components/template/screen/NotFound";
//이미지 슬라이드 필요없으면 바로 버릴 예정
/* import "antd/dist/antd.css"; */

import MyProfileJY from "./PAGE/MyProfileJY";
import FollowerListJy from "./PAGE/FollowerListJy";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppliCation>
          {/* 김현길 독립적인 라우트 1월 19일 이후 버전 맞춤 이후 */}
          <Switch>
            {/* 테스트 라우팅 */}
            <Route path="/myprofilejy" component={MyProfileJY} exact />
            <Route path="/followerlistjy" component={FollowerListJy} exact />

            {/* auth */}
            <Route path="/join/email" component={SetMemberShipKHK} exact />
            <Route path="/" component={LoginMain} exact />
            <Route path="/login" component={LoginEmailKHK} exact />

            {/* 홈 */}
            <Route path="/home" component={HomeKHK} exact />
            <Route path="/search" component={SearchKHK} exact />

            {/* profile */}
            <Route path="/profile/my" component={MyprofileKHK} exact />
            <Route
              path="/profile/you/:accountId"
              component={YourProfile}
              exact
            />
            <Route
              path="/profile/my/update"
              component={ProfileUpdateKHK}
              exact
            />
            <Route
              path="/profile/:accountId/follower"
              component={FollowerListKHK}
              exact
            />
            <Route
              path="/profile/:accountId/following"
              component={FollowingListKHK}
              exact
            />
            {/* 62183cfb9d09d36b2150a8c6 */}
            {/* post */}
            <Route path="/post/my/upload" component={PostUploadKHK} exact />
            <Route path="/post/:postId" component={PostViewKHK} exact />

            {/* product */}
            <Route path="/product/upload" component={ProductUploadKHK} exact />
            <Route
              path="/product/:productId/update"
              component={ProductUpdateKHK}
              exact
            />
            <Route path={"*"} component={NotFound} />
          </Switch>
        </AppliCation>
      </Router>
    </ThemeProvider>
  );
};

const AppliCation = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
