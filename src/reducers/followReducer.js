import {
  FOLLOW_POST_LIST_REQUEST,
  FOLLOW_POST_LIST_SUCCESS,
  FOLLOW_POST_LIST_FAIL,
  FOLLOWER_LIST_REQUEST,
  FOLLOWER_LIST_SUCCESS,
  FOLLOWER_LIST_FAIL,
  FOLLOWING_LIST_REQUEST,
  FOLLOWING_LIST_SUCCESS,
  FOLLOWING_LIST_FAIL,
} from "../constants/followConstants";

export const followerPostListReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOW_POST_LIST_REQUEST:
      return { loading: true };
    case FOLLOW_POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case FOLLOW_POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const followerListReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOWER_LIST_REQUEST:
      return { loading: true };
    case FOLLOWER_LIST_SUCCESS:
      return { loading: false, follower: action.payload };
    case FOLLOWER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const followingListReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOWING_LIST_REQUEST:
      return { loading: true };
    case FOLLOWING_LIST_SUCCESS:
      return { loading: false, following: action.payload };
    case FOLLOWING_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
