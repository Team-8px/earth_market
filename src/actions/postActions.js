import axios from "axios";
import {
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
} from "../constants/postConstants";
import { API_URL } from "../constants/defaultUrl";
import { logout } from "./userActions";

export const listPosts = () => async (dispatch, getState) => {
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
      `${API_URL}/post/${userInfo.user.accountname}/userpost`,
      config
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
