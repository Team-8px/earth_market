import React, { useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import { useEffect } from "react";
import usePromise from "../../../hooks/usePromise";

const InformationContainer = () => {
  const [loading, response, error] = usePromise(() => {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
    );
  });

  if (loading) {
    return <div>대기중 입니다</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ul>
        {response &&
          response.map(item => {
            return (
              <li key={Math.random() * 100}>
                {item.children.map(items => {
                  return (
                    <div key={Math.random() * 100}>
                      {items.value.slice(0, -1)}
                    </div>
                  );
                })}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default InformationContainer;
