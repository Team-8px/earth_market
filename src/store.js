import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userJoinMembershipReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  productCreateReducer,
  productListReducer,
} from "./reducers/productReducers";
import { postCreateReducer, postListReducer } from "./reducers/postReducers";
import commentReducer from "./reducers/commentReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userJoinMembership: userJoinMembershipReducer,
  productCreate: productCreateReducer,
  updateUserProfile: userUpdateReducer,
  postCreate: postCreateReducer,
  comment: commentReducer,
  productList: productListReducer,
  postList: postListReducer,
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
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
