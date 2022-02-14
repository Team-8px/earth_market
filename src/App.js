import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import NavigationBar from "./hooks/useGNB";

// 최재영 독립적인 라우트 2월 4일 이후 생성
import ChatList from "./components/template/chat/ChatList";
import ChatRoom from "./components/template/chat/ChatRoom";
import Header from "./components/template/common/Header";
import Navigation from "./components/template/common/Navigation";
import HomeFeed from "./components/template/home/HomeFeed";
import Search from "./components/template/home/Search";
import JoinEmail from "./components/template/join/JoinEmail";
import JoinProfile from "./components/template/join/JoinProfile";
import LoginEmail from "./components/template/login/LoginEmail";
import LoginMain from "./components/template/login/LoginMain";
import PostUpload from "./components/template/post/PostUpload";
import PostView from "./components/template/post/PostView";
import ProductEdit from "./components/template/product/ProductEdit";
import ProductUpload from "./components/template/product/ProductUpload";
import Follower from "./components/template/profile/Follower";
import Profile from "./components/template/profile/Profile";
import ProfileEdit from "./components/template/profile/ProfileEdit";
import NotFound from "./components/template/screen/NotFound";
import SplashScreen from "./components/template/screen/SplashScreen";

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
import SetMemberShipGH from "./pages/auth/SetMemberShip-gh";
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
          {/* 최재영 독립적인 라우트 2월 4일 이후 생성 */}
          <Switch>
            {/* chat */}
            <Route path="/chatlist" component={ChatList} exact />
            <Route path="/chatroom" component={ChatRoom} exact />
            {/* common */}
            <Route path="/Header" component={Header} exact />
            <Route path="/navigation" component={Navigation} exact />
            {/* home */}
            <Route path="/homefeed" component={HomeFeed} exact />
            <Route path="/search" component={Search} exact />
            {/* join */}
            <Route path="/joinemail" component={JoinEmail} exact />
            <Route path="/joinprofile" component={JoinProfile} exact />
            {/* login */}
            <Route path="/loginemail" component={LoginEmail} exact />
            <Route path="/loginmain" component={LoginMain} exact />
            {/* post */}
            <Route path="/postupload" component={PostUpload} exact />
            <Route path="/postview" component={PostView} exact />
            {/* product */}
            <Route path="/productedit" component={ProductEdit} exact />
            <Route path="/productupload" component={ProductUpload} exact />
            {/* profile */}
            <Route path="/follower" component={Follower} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/profileedit" component={ProfileEdit} exact />
            {/* screen */}
            <Route path="/notfound" component={NotFound} exact />
            <Route path="/splashscreen" component={SplashScreen} exact />
          </Switch>
          {/* 김현길 독립적인 라우트 1월 19일 이후 버전 맞춤 이후 */}
          <Switch>
            {/* auth */}
            <Route path="/gh/join/email" component={SetMemberShipGH} exact />
            <Route path="/gh" component={LoginEmailKHK} exact />

            {/* 홈 */}
            <Route path="/gh/home" component={HomeKHK} exact />
            <Route path="/gh/search" component={SearchKHK} exact />

            {/* profile */}
            <Route path="/gh/profile/my" component={MyprofileKHK} exact />
            <Route
              path="/gh/profile/you/:acccountId"
              component={MyProfileGH}
              exact
            />
            <Route
              path="/gh/profile/my/update"
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
            <Route path="/gh/post/my/upload" component={PostUploadKHK} exact />
            <Route path="/gh/post/:postId" component={PostViewGH} exact />

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
