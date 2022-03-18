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

    const { data } = await axios.get(NEWS_URL);

    const payload = data.categoryNewsList;

    dispatch({
      type: CRAWLING_NEWS_LIST_SUCCESS,
      payload,
    });
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
