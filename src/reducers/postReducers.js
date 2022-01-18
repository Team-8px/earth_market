import {
  POST_CREATE_RESET,
  POST_CREATE_FAIL,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
} from "../constants/postConstants";

import dayjs from "dayjs";

export const postReadReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return { ...state, loading: true };
    case POST_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload.post.content,
        updatedAt: dayjs(action.payload.post.updatedAt).format(
          "YY년 MM월 DD일",
        ),
        heartCount: action.payload.post.heartCount,
        commentCount: action.payload.post.commentCount,
        comment: action.payload.post.comment,
        postId: action.payload.post.id,
        postImages: action.payload.post.image.split(","),
        post: action.payload.post,
      };
    case POST_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

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
