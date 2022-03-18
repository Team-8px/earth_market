import axios from "axios";
import {
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_LIKE_REQUEST,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAIL,
  POST_UNLIKE_REQUEST,
  POST_UNLIKE_SUCCESS,
  POST_UNLIKE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
} from "../constants/postConstants";
import { API_URL } from "../constants/defaultUrl";
import { logout } from "./userActions";

export const updatePost =
  (postText, image, postId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_UPDATE_REQUEST,
      });

      let reqData = {
        post: { content: postText, image },
      };

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.user.token}`,
        },
      };

      const { data } = await axios.put(
        `${API_URL}/post/${postId}`,
        reqData,
        config,
      );

      dispatch({
        type: POST_UPDATE_SUCCESS,
        payload: data,
      });

      document.location.href = "/profile";
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: POST_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const likePost = postId => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_LIKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      method: "post",
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios(`${API_URL}/post/${postId}/heart`, config);

    dispatch({
      type: POST_LIKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: POST_LIKE_FAIL,
      payload: message,
    });
  }
};

export const unLikePost = postId => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UNLIKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios.delete(
      `${API_URL}/post/${postId}/unheart`,
      config,
    );

    dispatch({
      type: POST_UNLIKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: POST_UNLIKE_FAIL,
      payload: message,
    });
  }
};

export const getPost = postId => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_GET_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/post/${postId}`, config);

    dispatch({
      type: POST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPosts = accountId => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/post/${accountId}/userpost`,
      config,
    );

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (content, image) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const reqData = {
      post: { content, image },
    };

    const { data } = await axios.post(`${API_URL}/post`, reqData, config);

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });

    document.location.href = "/profile";
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deletePost = postId => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios.delete(`${API_URL}/post/${postId}`, config);

    dispatch({
      type: POST_DELETE_SUCCESS,
      payload: data,
    });

    document.location.href = "/profile";
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: POST_DELETE_FAIL,
      payload: message,
    });
  }
};
