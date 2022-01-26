import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const UseGNB = () => {
  const [isAppeardGNB, setIsAppeardGNB] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/gh" || pathname === "/gh/join/email") {
      setIsAppeardGNB(true);
    }
  }, [isAppeardGNB, setIsAppeardGNB]);

  return (
    <React.Fragment>
      {isAppeardGNB && isAppeardGNB ? (
        <React.Fragment></React.Fragment>
      ) : (
        <div>
          <br />
          <br />
          <br />
          <br />
          <h1>GNB</h1>
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};

export default UseGNB;
