import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_JOIN_MEMBERSHIP_REQUEST,
  USER_JOIN_MEMBERSHIP_SUCCESS,
  USER_JOIN_MEMBERSHIP_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_READ_PROFILE_REQUEST,
  USER_READ_PROFILE_SUCCESS,
  USER_READ_PROFILE_FAIL,
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAIL,
} from "../constants/userConstants";

export const userSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SEARCH_REQUEST:
      return { loading: true };
    case USER_SEARCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case USER_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_READ_PROFILE_REQUEST:
      return { loading: true };
    case USER_READ_PROFILE_SUCCESS:
      return {
        loading: false,
        username: action.payload.profile.username,
        accountname: action.payload.profile.accountname,
        intro: action.payload.profile.intro,
        image: action.payload.profile.image,
        followerCount: action.payload.profile.followerCount,
        followingCount: action.payload.profile.followingCount,
        isfollow: action.payload.profile.isfollow,
      };
    case USER_READ_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userJoinMembershipReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_JOIN_MEMBERSHIP_REQUEST:
      return { loading: true };
    case USER_JOIN_MEMBERSHIP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_JOIN_MEMBERSHIP_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        accountname: action.payload.accountname,
        username: action.payload.username,
        image: action.payload.image,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
