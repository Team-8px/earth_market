import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_JOIN_MEMBERSHIP_REQUEST,
  USER_JOIN_MEMBERSHIP_SUCCESS,
  USER_JOIN_MEMBERSHIP_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from "../constants/userConstants";
import { API_URL } from "../constants/defaultUrl";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const reqData = {
      user: { email, password },
    };

    const { data } = await axios.post(`${API_URL}/user/login`, reqData, config);
    console.log(data, "userActions");
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));

    document.location.href = "/home";
  } catch (error) {
    console.log(error, "userActions Error");
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
};

export const joinMembership =
  (email, password, username, accountname) => async (dispatch) => {
    try {
      dispatch({
        type: USER_JOIN_MEMBERSHIP_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const reqData = {
        user: { email, password, username, accountname },
      };

      const { data } = await axios.post(`${API_URL}/user`, reqData, config);

      console.log(data, "userActions");

      dispatch({
        type: USER_JOIN_MEMBERSHIP_SUCCESS,
        payload: data,
      });

      //회원가입 api에서 응답으로 토큰정보를 주지 않는다.
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error, "userActions Error");
      dispatch({
        type: USER_JOIN_MEMBERSHIP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUserProfile =
  (image, username, accountname, intro) => async (dispatch, getState) => {
    console.log(image, username, accountname, intro);
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const reqData = {
        user: { image, username, accountname, intro },
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.user.token}`,
        },
      };

      const { data } = await axios.put(`${API_URL}/user`, reqData, config);

      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      });
    }
  };
