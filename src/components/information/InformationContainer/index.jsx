import React, { useState } from "react";
import InformationCard from "../InformationCard";
import axios from "axios";
import usePromise from "../../../hooks/usePromise";
import { timeForToday } from "../../../util/timeForToday";
import { InfomationWrapper, InfomationList } from "./index.style.js"


import Loading from "../../etc/Loading";
import Error from "../../etc/Error";

const InformationContainer = (time) => {
  const [loading, response, error] = usePromise(() => {
    const data = axios.get(
      "http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
    ); 
    console.log(response) 
    return data
  });
  console.log(response) 

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <InfomationWrapper>
      <InfomationList>
        {response &&
          response.map((item,i) => {
            return (
                <InformationCard
                  key={Math.random() * 100}
                  newstitle={item.children[5].value.slice(0,-1)}
                  newsimage={`http://www.nongsaro.go.kr/portal/imgView.do?atchmnflGroupEsntlCode=${item.children[0].value.slice(
                        0,
                        -1,
                      )}`}
                  newsdate={timeForToday(item.children[11].value.slice(0,-1))}
                />
            );
          })}
      </InfomationList>
    </InfomationWrapper>
  );
};

export default InformationContainer;