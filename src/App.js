import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
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

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppliCation>
        <Switch>
          <Route path="/" component={LoginEmail} exact />
          <Route path="/join/email" component={SetMemberShip} />
          <Route path="/home" component={HomeMain} />
          <Route path="/product" component={ProductUpload} />
          <Route path="/user/update" component={ProfileModification} />
          <Route path="/post/upload" component={PostUpload} />
          <Route path="/post:postId" component={PostView} />
          <Route path="/myprofile" component={MyProfile} />
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
      </AppliCation>
    </Router>
  );
};

const AppliCation = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
