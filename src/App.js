import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

// Auth
import JoinMemberShip from "./pages/auth/JoinMemberShip";
import LoginEmail from "./pages/auth/LoginEmail";
import LoginMain from "./pages/auth/LoginMain";
import SetMemberShip from "./pages/auth/SetMemberShip";

// chat
import ChatList from "./pages/chat/ChatList";
import ChatRoom from "./pages/chat/ChatRoom";

// home
import HomeFeed from "./pages/home/HomeFeed";
import HomeMain from "./pages/home/HomeMain";
import Search from "./pages/home/Search";

// post
import PostUpload from "./pages/post/PostUpload";
import PostView from "./pages/post/PostView";

// product
import ProductUpload from "./pages/product/ProductUpload";
import ProductUpdate from "./pages/product/ProductUpdate";

// profile
import Follower from "./pages/profile/Follower";
import MyProfile from "./pages/profile/MyProfile";
import ProfileModification from "./pages/profile/ProfileModification";
import YourProfile from "./pages/profile/YourProfile";

// screen
import NotFound from "./pages/screen/NotFound";
import SplashScreen from "./pages/screen/SplashScreen";

//김현길 독립적인 라우트 1월 19일 이후 버전 맞춤 이후
import SetMemberShipGH from "./pages/auth/SetMemberShip-gh";
import MyProfileGH from "./pages/profile/Myprofile-gh";
import MyProfileUpdateGH from "./pages/profile/MyprofileUpdate-gh";
import PostUploadGH from "./pages/post/PostUpload-gh";
import ProductUploadGH from "./pages/product/ProductUpload-gh";
import ProductUpdateGH from "./pages/product/ProductUpdate-gh";
import PostViewGH from "./pages/post/PostView-gh";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppliCation>
          <Switch>
            <Route path="/" component={LoginEmail} exact />
            <Route path="/join/email" component={SetMemberShip} />
            <Route path="/home" component={HomeMain} />
            <Route path="/product" component={ProductUpload} exact />
            <Route
              path="/product/update/:productId"
              component={ProductUpdate}
            />
            <Route path="/user/update" component={ProductUpdate} />
            <Route path="/post/upload" component={PostUpload} />
            <Route path="/post/:postId" component={PostView} />
            {/* <Route path="/myprofile" component={MyProfile} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>

          <Switch>
            {/* auth */}
            <Route path="/joinmembership" component={JoinMemberShip} exact />
            <Route path="/loginemail" component={LoginEmail} exact />
            <Route path="/loginmain" component={LoginMain} exact />
            <Route path="/setmembership" component={SetMemberShip} exact />
          </Switch>

          <Switch>
            {/* chat */}
            <Route path="/chatlist" component={ChatList} exact />
            <Route path="/chatroom" component={ChatRoom} exact />
          </Switch>

          <Switch>
            {/* home */}
            <Route path="/homefeed" component={HomeFeed} exact />
            <Route path="/homemain" component={HomeMain} exact />
            <Route path="/search" component={Search} exact />
          </Switch>

          <Switch>
            {/* post */}
            <Route path="/postupload" component={PostUpload} exact />
            <Route path="/postview" component={PostView} exact />
          </Switch>

          <Switch>
            {/* product */}
            <Route path="/productupload" component={ProductUpload} exact />
            <Route path="/productupdate" component={ProductUpdate} exact />
          </Switch>

          <Switch>
            {/* profile */}
            <Route path="/follower" component={Follower} exact />
            <Route path="/myprofile" component={MyProfile} exact />
            <Route
              path="/profilemodification"
              component={ProfileModification}
              exact
            />
            <Route path="/yourprofile" component={YourProfile} exact />
          </Switch>

          <Switch>
            {/* profile */}
            <Route path="/notfound" component={NotFound} exact />
            <Route path="/splashscreen" component={SplashScreen} exact />
          </Switch>

          {/* 김현길 독립적인 라우트 1월 19일 이후 버전 맞춤 이후 */}
          <Switch>
            {/* auth */}
            <Route path="/gh/join/email" component={SetMemberShipGH} exact />

            {/* profile */}
            <Route path="/gh/profile/my" component={MyProfileGH} exact />
            <Route
              path="/gh/profile/you/:acccountId"
              component={MyProfileGH}
              exact
            />
            <Route
              path="/gh/profile/my/update"
              component={MyProfileUpdateGH}
              exact
            />

            {/* post */}
            <Route path="/gh/post/my/upload" component={PostUploadGH} exact />
            <Route path="/gh/post/my/:postId" component={PostViewGH} exact />

            {/* product */}
            <Route
              path="/gh/product/upload"
              component={ProductUploadGH}
              exact
            />
            <Route
              path="/gh/product/update/:productId"
              component={ProductUpdateGH}
              exact
            />
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
