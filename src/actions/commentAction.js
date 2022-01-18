import axios from "axios";
import { API_URL } from "../constants/defaultUrl";
import {
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
} from "../constants/commentConstants";

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
      console.log(content, postId);
      // store에 저장된 userInfo 조회
      const {
        userLogin: { userInfo },
      } = getState();

      // Body

      const reqData = {
        comment: { content: content },
      };

      // Auth
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.user.token}`,
          "Content-Type": "application/json",
        },
      };

      // api 요청
      const { data } = await axios.post(
        `${API_URL}/post/${postId}/comments`,
        reqData,
        config,
      );

      // 요청 성공시 data 전송.
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
