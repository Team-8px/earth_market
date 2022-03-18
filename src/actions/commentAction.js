import axios from "axios";
import { API_URL } from "../constants/defaultUrl";
import { logout } from "../actions/userActions";
import {
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAIL,
} from "../constants/commentConstants";

export const deleteComment =
  (postId, commentId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COMMENT_DELETE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.user.token}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.delete(
        `${API_URL}/post/${postId}/comments/${commentId}`,
        config,
      );

      const payloadData = {
        message: data.message,
        commentId,
      };

      dispatch({
        type: COMMENT_DELETE_SUCCESS,
        payload: payloadData,
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
        type: COMMENT_DELETE_FAIL,
        payload: message,
      });
    }
  };

export const getCommentList = postId => async (dispatch, getState) => {
  try {
    dispatch({ type: COMMENT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${API_URL}/post/${postId}/comments`,
      config,
    );

    dispatch({
      type: COMMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMENT_LIST_FAIL, payload: message });
  }
};

export const commentCreateAction =
  (content, postId) => async (dispatch, getState) => {
    try {
      dispatch({ type: COMMENT_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const reqData = {
        comment: { content: content },
      };

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.user.token}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${API_URL}/post/${postId}/comments`,
        reqData,
        config,
      );

      dispatch({
        type: COMMENT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMMENT_CREATE_FAIL, payload: message });
    }
  };
