import {
 COMMENT_CREATE_REQUEST,
 COMMENT_CREATE_SUCCESS,
 COMMENT_CREATE_FAIL
} from "../constants/commentConstants";

export const commentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return { loading: true };
    case COMMENT_CREATE_SUCCESS:
      return { loading: false, comment: action.payload.comment };
    case COMMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


