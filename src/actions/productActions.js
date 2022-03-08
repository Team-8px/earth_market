import axios from "axios";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_READ_REQUEST,
  PRODUCT_READ_SUCCESS,
  PRODUCT_READ_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/productConstants";
import { logout } from "./userActions";
import { API_URL } from "../constants/defaultUrl";

export const updateProduct =
  (image, itemName, price, link, productId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      });

      let reqData = {
        product: { image, itemName, price, link },
      };

      const {
        userLogin: { userInfo },
      } = getState();

      /*  if (!!image) reqData.product.itemImage = image;
      if (!!itemName) reqData.product.itemName = itemName;
      if (!!price) reqData.product.price = price;
      if (!!link) reqData.product.link = link; */

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.user.token}`,
        },
      };

      const {
        data: { product },
      } = await axios.put(`${API_URL}/product/${productId}`, reqData, config);

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: {
          itemName: product.itemName,
          price: product.price,
          link: product.link,
          itemImage: product.itemImage,
        },
      });

      document.location.href = "/profile";
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const getProduct = productId => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_READ_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const {
      data: { product },
    } = await axios.get(`${API_URL}/product/detail/${productId}`, config);

    dispatch({
      type: PRODUCT_READ_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_READ_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProducts = accountId => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/product/${accountId}`, config);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct =
  (itemName, price, link, itemImage) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
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
        product: { itemName, price, link, itemImage },
      };

      const { data } = await axios.post(`${API_URL}/product`, reqData, config);
      console.log(data, "productActions");
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });

      document.location.href = "/profile/my";
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteProduct = productId => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
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
      `${API_URL}/product/${productId}`,
      config,
    );

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
    });

    document.location.href = "/profile/my";
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      //dispatch(logout());
    }
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};
