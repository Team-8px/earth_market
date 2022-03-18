import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

import LoginEmail from "./pages/LoginEmail";
import LoginMain from "./pages/LoginMain";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import ProductUpload from "./pages/ProductUpload";
import PostUpload from "./pages/PostUpload";
import PostUpdate from "./pages/PostUpdate";
import ProfileUpdate from "./pages/ProfileUpdate";
import FollowerList from "./pages/FollowerList";
import FollowingList from "./pages/FollowingList";
import PostView from "./pages/PostView";
import ProductUpdate from "./pages/ProductUpdate";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import Information from "./pages/Information";

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
  /* height: 100vh; */
`;

export default App;
