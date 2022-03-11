import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

import LoginEmail from "./PAGE/LoginEmailJS";
import LoginMain from "./PAGE/LoginMain";
import HomeKHK from "./PAGE/Home";
import SearchKHK from "./PAGE/Search";
import Profile from "./PAGE/Profile";
import ProductUpload from "./PAGE/ProductUpload";
import PostUpload from "./PAGE/PostUpload";
import ProfileUpdate from "./PAGE/ProfileUpdate";
import FollowerListKHK from "./PAGE/FollowerList";
import FollowingListKHK from "./PAGE/FollowingList";
import PostView from "./PAGE/PostView";
import ProductUpdate from "./PAGE/ProductUpdate";
import Join from "./PAGE/Join";
import NotFound from "./PAGE/NotFound";
import Information from "./PAGE/Information";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppliCation>
          <Switch>
            {/* 테스트 라우팅 */}
            {/* auth */}
            <Route path="/join" component={Join} exact />
            <Route path="/" component={LoginMain} exact />
            <Route path="/login" component={LoginEmail} exact />

            {/* 홈 */}
            <Route path="/home" component={HomeKHK} exact />
            <Route path="/search" component={SearchKHK} exact />

            {/* profile */}
            <Route path="/profile" component={Profile} exact />
            <Route path="/profile/:accountId" component={Profile} exact />
            <Route
              path="/profile/myself/update"
              component={ProfileUpdate}
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
            {/* post */}
            <Route path="/post/upload" component={PostUpload} exact />
            <Route path="/post/:postId" component={PostView} exact />

            {/* product */}
            <Route path="/product/upload" component={ProductUpload} exact />
            <Route
              path="/product/:productId/update"
              component={ProductUpdate}
              exact
            />
            {/* 농촌 소식 */}
            <Route path="/information" component={Information} exact />

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
