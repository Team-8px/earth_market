import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navigation from "../components/template/common/Navigation";

const UseGNB = () => {
  const [isAppeardGNB, setIsAppeardGNB] = useState(false);
  const { pathname } = useLocation();
  const {} = useParams();

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/join/email" ||
      pathname === "/join/email/" ||
      pathname === "/post/my/upload" ||
      pathname === "/post/my/upload/"
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
