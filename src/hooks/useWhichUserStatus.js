import React, { useState } from "react";
import { useParams } from "react-router-dom";

const useWhichUserAccountName = () => {
  const [accountname, setAccountName] = useState("");
  const accountnameFromParams = useParams()?.accountId;
  const accountnameFromlocalStorage = JSON.parse(
    localStorage.getItem("userInfo")?.user?.accountname,
  );
  if (accountnameFromParams) {
    setAccountName(accountnameFromParams);
  } else {
    setAccountName(accountnameFromlocalStorage);
  }

  return accountname;
};

export default useWhichUserAccountName;
