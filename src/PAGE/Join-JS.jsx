import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import JoinMember from "../components/Join 작업/JoinMember";
import JoinProfile from "../components/Join 작업/JoinProfile";

const JoinJS = () => {
  const [nextPage, setNextPage] = useState(true);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const history = useHistory();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      history.push("/join/email");
    }
  }, []);

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

export default JoinJS;
