import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import HomeMain from "./pages/home/HomeMain";
import LoginEmail from "./pages/auth/LoginEmail";
import JoinMemberShip from "./pages/auth/JoinMemberShip";
import ProductUpload from "./pages/product/Upload";
import ProfileModification from "./screens/ProfileModification";
import PostUpload from "./pages/post/Upload";
import CommentScreen from "./screens/CommentScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import NotFound from "./pages/screen/NotFound";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" component={LoginEmail} exact />
          <Route path="/join/email" component={JoinMemberShip} exact />
          <Route path="/home" component={HomeMain} exact />
          <Route path="/product" component={ProductUpload} exact />
          <Route path="/user" component={ProfileModification} exact />
          <Route path="/post" component={PostUpload} exact />
          <Route path="/post/comment" component={CommentScreen} exact />
          <Route path="/myprofile" component={MyProfileScreen} exact />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
