import axios from "axios";
import { NEWS_URL } from "../constants/defaultUrl";
import {
  CRAWLING_NEWS_LIST_REQUEST,
  CRAWLING_NEWS_LIST_SUCCESS,
  CRAWLING_NEWS_LIST_FAIL,
} from "../constants/crawlingConstants";

export const getNewsList = () => async dispatch => {
  try {
    dispatch({ type: CRAWLING_NEWS_LIST_REQUEST });

    const response = await axios.get(NEWS_URL);

    console.log(response);

    /* dispatch({
      type: CRAWLING_NEWS_LIST_SUCCESS,
      payload: data.posts,
    }); */
  } catch (error) {
    dispatch({
      type: CRAWLING_NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
