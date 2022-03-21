import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import JoinMember from "../components/join/JoinMember";
import JoinProfile from "../components/join/JoinProfile";

const Join = () => {
  const [nextPage, setNextPage] = useState(true);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const history = useHistory();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      history.push("/home");
    }
  }, [history]);

  return (
    <>
      {nextPage ? (
        <JoinMember setNextPage={setNextPage} setUserInfo={setUserInfo} />
      ) : (
        <JoinProfile userInfo={userInfo} />
      )}
    </>
  );
};

export default Join;
