import axios from "axios";
import { API_URL } from "../constants/defaultUrl";
import {
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL
} from "../constants/commentConstants";

export const commentCreateAction = (content) => async (dispatch, getState) => {
  dispatch({ type: COMMENT_CREATE_REQUEST });

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
    `${API_URL}/post/61db8a6c209fe0d5be04ad67/comments`,
    reqData,
    config
  );

  // 요청 성공시 data 전송.
  dispatch({
    type: COMMENT_CREATE_SUCCESS,
    payload: data,
  });

  try {
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMENT_CREATE_FAIL, payload: message });
  }
};
