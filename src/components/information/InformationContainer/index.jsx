import React, { useEffect } from "react";
import InformationCard from "../InformationCard";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../../actions/crawlingAction";
import { timeForToday } from "../../../util/timeForToday";
import { InfomationWrapper, InfomationList } from "./index.style.js";

const InformationContainer = () => {
  const dispatch = useDispatch();

  const { newsList } = useSelector(state => state?.crawlingNews);

  useEffect(() => {
    dispatch(getNewsList());
  }, [dispatch]);

  return (
    <InfomationWrapper>
      <InfomationList>
        {newsList &&
          newsList.map(newsItem => {
            return (
              <InformationCard
                key={newsItem.articleSeq}
                title={newsItem?.title}
                image={`https://www.nongmin.com${newsItem.imageModel.uploadPath}${newsItem.imageModel.storeFileName}`}
                date={timeForToday(newsItem?.issueDate)}
                category="농민신문"
                content={newsItem?.readContent}
                link={`https://www.nongmin.com/news/NEWS/FLD/CNT/${newsItem.articleSeq}/view`}
              />
            );
          })}
      </InfomationList>
    </InfomationWrapper>
  );
};

export default InformationContainer;
