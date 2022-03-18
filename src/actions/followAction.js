import axios from "axios";
import {
  FOLLOW_POST_LIST_REQUEST,
  FOLLOW_POST_LIST_SUCCESS,
  FOLLOW_POST_LIST_FAIL,
  FOLLOWER_LIST_REQUEST,
  FOLLOWER_LIST_SUCCESS,
  FOLLOWER_LIST_FAIL,
  FOLLOWING_LIST_REQUEST,
  FOLLOWING_LIST_SUCCESS,
  FOLLOWING_LIST_FAIL,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAIL,
} from "../constants/followConstants";
import { API_URL } from "../constants/defaultUrl";

export const followUser = otherAccountId => async (dispatch, getState) => {
  try {
    dispatch({ type: FOLLOW_USER_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      method: "post",
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
        "Content-type": "application/json",
      },
    };

    const { data } = await axios(
      `${API_URL}/profile/${otherAccountId}/follow`,
      config,
    );

    dispatch({
      type: FOLLOW_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FOLLOW_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const unfollowUser = otherAccountId => async (dispatch, getState) => {
  try {
    dispatch({ type: UNFOLLOW_USER_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `${API_URL}/profile/${otherAccountId}/unfollow`,
      config,
    );

    dispatch({
      type: UNFOLLOW_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNFOLLOW_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFollowerList = accountName => async (dispatch, getState) => {
  try {
    dispatch({ type: FOLLOWER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${API_URL}/profile/${
        accountName ? accountName : userInfo?.user.accountname
      }/follower`,
      config,
    );

    dispatch({
      type: FOLLOWER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FOLLOWER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFollowingList = accountName => async (dispatch, getState) => {
  try {
    dispatch({ type: FOLLOWING_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${API_URL}/profile/${
        accountName ? accountName : userInfo?.user.accountname
      }/following`,
      config,
    );
    dispatch({
      type: FOLLOWING_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FOLLOWING_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFollowerPostList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FOLLOW_POST_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(`${API_URL}/post/feed`, config);

    dispatch({
      type: FOLLOW_POST_LIST_SUCCESS,
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: FOLLOW_POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
