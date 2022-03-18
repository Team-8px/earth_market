import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userJoinMembershipReducer,
  userUpdateReducer,
  userProfileReducer,
  userSearchReducer,
} from "./reducers/userReducers";
import {
  productCreateReducer,
  productListReducer,
  productUpdateReducer,
  productReadReducer,
  productDeleteReducer,
} from "./reducers/productReducers";
import {
  postCreateReducer,
  postListReducer,
  postReadReducer,
  postDeleteReducer,
  postLikeReducer,
  postUnLikeReducer,
  postUpdateReducer,
} from "./reducers/postReducers";
import {
  commentCreateReducer,
  commentListReducer,
  commentDeleteReducer,
} from "./reducers/commentReducer";
import {
  followerPostListReducer,
  followerListReducer,
  followingListReducer,
  followUserReducer,
  unFollowUserReducer,
} from "./reducers/followReducer";
import { crawlingNewsReducer } from "./reducers/crawlingReducer";

const reducer = combineReducers({
  userSearch: userSearchReducer,
  userLogin: userLoginReducer,
  userJoinMembership: userJoinMembershipReducer,
  productCreate: productCreateReducer,
  productRead: productReadReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  productList: productListReducer,
  userUpdateProfile: userUpdateReducer,
  userReadProfile: userProfileReducer,
  commentCreate: commentCreateReducer,
  commentList: commentListReducer,
  commentDelete: commentDeleteReducer,
  postLike: postLikeReducer,
  postUnLike: postUnLikeReducer,
  postCreate: postCreateReducer,
  postList: postListReducer,
  postRead: postReadReducer,
  postDelete: postDeleteReducer,
  postUpdate: postUpdateReducer,
  followerPostList: followerPostListReducer,
  followerList: followerListReducer,
  followingList: followingListReducer,
  followUser: followUserReducer,
  unfollowUser: unFollowUserReducer,
  crawlingNews: crawlingNewsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
