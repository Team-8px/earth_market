import React, { useState } from "react";
import axios from "axios";
import usePromise from "../../../hooks/usePromise";
import Loading from "../../etc/Loading";
import Error from "../../etc/Error";

const InformationContainer = () => {
  const [loading, response, error] = usePromise(() => {
    return axios.get(
      "http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
    );
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <ul>
        {response &&
          response.map(item => {
            console.log("item List", item.children);
            return (
              <ul key={Math.random() * 100}>
                <div>{item.children[0].value}</div>
                <div>{item.children[7].value}</div>
                <img
                  src={`http://www.nongsaro.go.kr/portal/imgView.do?atchmnflGroupEsntlCode=${item.children[0].value.slice(
                    0,
                    -1,
                  )}`}
                />
              </ul>
            );
          })}
      </ul>
    </>
  );
};

export default InformationContainer;
