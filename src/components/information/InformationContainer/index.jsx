import React, { useState } from "react";
import axios from "axios";
import usePromise from "../../../hooks/usePromise";
import Loading from "../../etc/Loading";
import Error from "../../etc/Error";

const imgBox = [
  "https://images.unsplash.com/photo-1604336043426-072167a75b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHdpbnRlciUyMGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://cdn.pixabay.com/photo/2020/07/20/07/34/licorice-5422160__340.jpg", // 감초
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", // 감자
  "https://images.unsplash.com/photo-1594052695525-38d410d30d01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlciUyMGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", // 그냥 사과..
  "https://images.unsplash.com/photo-1547050605-2f268cd5daf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", // 축산물 어떻게 달라졌을까?
  "https://media.istockphoto.com/photos/snow-covered-on-an-apple-on-a-tree-picture-id154894896?b=1&k=20&m=154894896&s=170667a&w=0&h=1OO3FPOsIsuVtqwoFxcByOiucz0m5o3su9nRhFuaADs=", // 사과
  "https://images.unsplash.com/photo-1558439119-76863f94608a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYXN0aWMlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", // 비닐하우스
  "https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", // 감귤
  "https://images.unsplash.com/photo-1582280722302-a9a04506eb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwYmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", // 레드빈
  "https://images.unsplash.com/photo-1582288916603-4698cf723bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNvaWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", // 토양
];

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
              </ul>
            );
          })}
      </ul>
    </>
  );
};

export default InformationContainer;
