import {
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
} from "../constants/commentConstants";

export const commentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return { loading: true };
    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        commentId: action.payload.comment.id,
        commentContent: action.payload.comment.content,
        createdAt: action.payload.comment.createdAt,
      };
    case COMMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const commentListReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return { loading: true };
    case COMMENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.comments,
      };
    case COMMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
