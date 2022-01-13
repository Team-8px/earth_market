import {
  USER_COMMENT_REQUEST,
  USER_COMMENT_SUCCESS,
  USER_COMMENT_FAIL,
} from "../constants/commentConstants";

const commentReducer = (state = { commentList: {} }, action) => {
  switch (action.type) {
    case USER_COMMENT_REQUEST:
      return { loading: true };
    case USER_COMMENT_SUCCESS:
      return { loading: false, commentList: action.payload };
    case USER_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
