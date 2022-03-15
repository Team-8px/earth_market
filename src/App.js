import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

import LoginEmail from "./PAGE/LoginEmail";
import LoginMain from "./PAGE/LoginMain";
import Home from "./PAGE/Home";
import Search from "./PAGE/Search";
import Profile from "./PAGE/Profile";
import ProductUpload from "./PAGE/ProductUpload";
import PostUpload from "./PAGE/PostUpload";
import PostUpdate from "./PAGE/PostUpdate";
import ProfileUpdate from "./PAGE/ProfileUpdate";
import FollowerList from "./PAGE/FollowerList";
import FollowingList from "./PAGE/FollowingList";
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
            <Route path="/join" component={Join} exact />
            <Route path="/" component={LoginMain} exact />
            <Route path="/login" component={LoginEmail} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/search" component={Search} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/profile/:accountId" component={Profile} exact />
            <Route
              path="/profile/myself/update"
              component={ProfileUpdate}
              exact
            />
            <Route
              path="/profile/:accountId/follower"
              component={FollowerList}
              exact
            />
            <Route
              path="/profile/:accountId/following"
              component={FollowingList}
              exact
            />
            <Route path="/post/upload" component={PostUpload} exact />
            <Route path="/post/:postId" component={PostView} exact />
            <Route path="/post/:postId/update" component={PostUpdate} exact />
            <Route path="/product/upload" component={ProductUpload} exact />
            <Route
              path="/product/:productId/update"
              component={ProductUpdate}
              exact
            />
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
