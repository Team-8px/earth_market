import axios from "axios";
import { API_URL } from "../constants/defaultUrl";
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

      console.log(data);

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
        //dispatch(logout());
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
    //console.log(postId, "comment list postID");
    // store에 저장된 userInfo 조회
    const {
      userLogin: { userInfo },
    } = getState();

    // Auth
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
        "Content-Type": "application/json",
      },
    };

    // api 요청
    const { data } = await axios.get(
      `${API_URL}/post/${postId}/comments`,
      config,
    );
    //console.log(data, "commentListAction");
    // 요청 성공시 data 전송.
    dispatch({
      type: COMMENT_LIST_SUCCESS,
      payload: data,
    });
    //새로고침
    //window.location.reload(1);
    //document.location.href = document.location.href;
    //window.location.replace(`/post/${postId} `);
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

      //document.location.href = `/gh/post/my/${postId}`;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMMENT_CREATE_FAIL, payload: message });
    }
  };
