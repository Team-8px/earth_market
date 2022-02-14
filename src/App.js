import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import NavigationBar from "./hooks/useGNB";

//김현길 독립적인 라우트 2월 8일 데이터 바인딩 작업
import LoginEmailKHK from "./PAGE/LoginEmail";
import HomeKHK from "./PAGE/Home";
import SearchKHK from "./PAGE/Search";
import MyprofileKHK from "./PAGE/MyProfile";
import ProductUploadKHK from "./PAGE/ProductUpload";
import PostUploadKHK from "./PAGE/PostUpload";
import ProfileUpdateKHK from "./PAGE/ProfileUpdate";
import FollowerListKHK from "./PAGE/FollowerList";
import FollowingListKHK from "./PAGE/FollowingList";
//import PostViewKHK from "./PAGE/PostView";
import ProductUpdateKHK from "./PAGE/ProductUpdate";

//김현길 독립적인 라우트 1월 19일 이후 버전 맞춤 이후
//import SetMemberShipGH from "./pages/auth/SetMemberShip-gh";
import SetMemberShipKHK from "./PAGE/JoinProfile";
//import LoginEmailGH from "./pages/auth/LoginEmail-gh";
import MyProfileGH from "./pages/profile/Myprofile-gh";
import MyProfileUpdateGH from "./pages/profile/MyprofileUpdate-gh";
import PostUploadGH from "./pages/post/PostUpload-gh";
import ProductUploadGH from "./pages/product/ProductUpload-gh";
import ProductUpdateGH from "./pages/product/ProductUpdate-gh";
import PostViewGH from "./pages/post/PostView-gh";
//홈피드, 팔로우, 검색
import HomeGH from "./pages/home/Home-gh";
import SearchGH from "./pages/home/Search-gh";
import FollowerListGH from "./pages/profile/Follower-gh";
import FollowingListGH from "./pages/profile/Following-gh";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppliCation>
          {/* 김현길 독립적인 라우트 1월 19일 이후 버전 맞춤 이후 */}
          <Switch>
            {/* auth */}
            <Route path="/gh/join/email" component={SetMemberShipKHK} exact />
            <Route path="/gh" component={LoginEmailKHK} exact />

            {/* 홈 */}
            <Route path="/home" component={HomeKHK} exact />
            <Route path="/search" component={SearchKHK} exact />

            {/* profile */}
            <Route path="/profile/my" component={MyprofileKHK} exact />
            <Route path="/gh/profile/you" component={MyprofileKHK} exact />
            <Route
              path="/gh/profile/you/:acccountId"
              component={MyProfileGH}
              exact
            />
            <Route
              path="/profile/my/update"
              component={ProfileUpdateKHK}
              exact
            />
            <Route
              path="/gh/profile/:accountId/follower"
              component={FollowerListKHK}
              exact
            />
            <Route
              path="/gh/profile/:accountId/following"
              component={FollowingListKHK}
              exact
            />

            {/* post */}
            <Route path="/post/my/upload" component={PostUploadKHK} exact />
            <Route path="/post/:postId" component={PostViewGH} exact />

            {/* product */}
            <Route
              path="/gh/product/upload"
              component={ProductUploadKHK}
              exact
            />
            <Route
              path="/gh/product/update/:productId"
              component={ProductUpdateKHK}
              exact
            />
          </Switch>
          <NavigationBar />
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
