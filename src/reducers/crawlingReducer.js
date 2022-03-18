import {
  CRAWLING_NEWS_LIST_REQUEST,
  CRAWLING_NEWS_LIST_SUCCESS,
  CRAWLING_NEWS_LIST_FAIL,
} from "../constants/crawlingConstants";

export const crawlingNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case CRAWLING_NEWS_LIST_REQUEST:
      return { loading: true };
    case CRAWLING_NEWS_LIST_SUCCESS:
      return { loading: false, newsList: action.payload };
    case CRAWLING_NEWS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
