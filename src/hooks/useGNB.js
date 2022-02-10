import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/template/common/Navigation";

const UseGNB = () => {
  const [isAppeardGNB, setIsAppeardGNB] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname === "/gh" ||
      pathname === "/gh/join/email" ||
      pathname === "/gh/" ||
      pathname === "/gh/join/email/"
    ) {
      setIsAppeardGNB(true);
    }
  }, [isAppeardGNB, setIsAppeardGNB]);

  return (
    <React.Fragment>
      {isAppeardGNB && isAppeardGNB ? (
        <React.Fragment></React.Fragment>
      ) : (
        <Navigation />
      )}
    </React.Fragment>
  );
};

export default UseGNB;
