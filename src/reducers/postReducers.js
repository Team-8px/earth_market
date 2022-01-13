import {
  POST_CREATE_RESET,
  POST_CREATE_FAIL,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
} from "../constants/postConstants";

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, products: [] };
    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.post,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true };
    case POST_CREATE_SUCCESS:
      //리덕스 depth 간소화 action.payload => action.payload.post 변경
      return { loading: false, success: true, post: action.payload.post };
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
