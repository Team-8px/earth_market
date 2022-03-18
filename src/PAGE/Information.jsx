import React from "react";
import InformationHeader from "../components/header/InformationHeader";
import InformationContainer from "../components/information/InformationContainer";
import Navbar from "../components/common/Navbar";


const InforMation = () => {
  return (
    <>
      <Navbar />
      <InformationHeader />
      <InformationContainer />
    </>
  )
};

export default InforMation;