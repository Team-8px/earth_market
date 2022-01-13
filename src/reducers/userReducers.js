import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_JOIN_MEMBERSHIP_REQUEST,
  USER_JOIN_MEMBERSHIP_SUCCESS,
  USER_JOIN_MEMBERSHIP_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/userConstants";

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

// user에는 Reqdata가 담기게 된다.
export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
