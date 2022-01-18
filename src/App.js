import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import HomeMain from "./pages/home/HomeMain";
import LoginEmail from "./pages/auth/LoginEmail";
import JoinMemberShip from "./pages/auth/JoinMemberShip";
import ProductUpload from "./pages/product/Upload";
import ProductModification from "./pages/product/Update";
import ProfileModification from "./pages/profile/ProfileModification";
import PostUpload from "./pages/post/Upload";
import PostView from "./pages/post/PostView";
import MyProfile from "./pages/profile/MyProfile";
import NotFound from "./pages/screen/NotFound";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" component={LoginEmail} exact />
          <Route path="/join/email" component={JoinMemberShip} />
          <Route path="/home" component={HomeMain} />
          <Route path="/product" component={ProductUpload} exact />
          <Route
            path="/product/update/:productId"
            component={ProductModification}
          />
          <Route path="/user/update" component={ProfileModification} />
          <Route path="/post/upload" component={PostUpload} />
          <Route path="/post/:postId" component={PostView} />
          <Route path="/myprofile" component={MyProfile} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
