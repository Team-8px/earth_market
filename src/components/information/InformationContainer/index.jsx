import React, { useEffect } from "react";
import InformationCard from "../InformationCard";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../../actions/crawlingAction";
import { timeForToday } from "../../../util/timeForToday";
import { InfomationWrapper, InfomationList } from "./index.style.js";

/* import Loading from "../../etc/Loading";
import Error from "../../etc/Error"; */

const InformationContainer = time => {
  /*   const [loading, response, error] = usePromise(() => {
    const data = axios.get(
      "http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
    );
    console.log(response);
    return data;
  });
  console.log(response);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  } */
  const dispatch = useDispatch();

  const { newsList, loading } = useSelector(state => state?.crawlingNews);

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
                category={newsItem?.categoryNameThird}
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

/* <InfomationWrapper>
      <InfomationList>
        {response &&
          response.map((item, i) => {
            return (
              <InformationCard
                key={Math.random() * 100}
                title={item.children[5].value.slice(0, -1)}
                text={item.children[7].value.slice(0, -1)}
                image={`http://www.nongsaro.go.kr/portal/imgView.do?atchmnflGroupEsntlCode=${item.children[0].value.slice(
                  0,
                  -1,
                )}`}
                date={timeForToday(item.children[11].value.slice(0, -1))}
              />
            );
          })}
      </InfomationList>
    </InfomationWrapper> */
