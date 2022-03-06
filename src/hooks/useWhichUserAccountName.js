import React, { useState } from "react";
import { useParams } from "react-router-dom";

const useWhichUserStatus = () => {
  const [accountnameFromParams] = useState(useParams()?.accountId);
  //const accountnameFromParams = useParams()?.accountId;

  return { accountnameFromParams };
};

export default useWhichUserStatus;
