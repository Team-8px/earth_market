//인수는 없고, prams가 존재하면 you, 존재하지 않으면 my를 반환.
export const getWhichUserStatus = () => {
  const accountnameFromParams = new URLSearchParams(window.location.search).get(
    "accountname",
  );
  //console.log(accountnameFromParams);
  return accountnameFromParams ? "you" : "my";
};

//인수는 없고, prams가 존재하면 다른사람의 계정을, 존재하지 않으면 접속한 사용자의 계정을 반환.
export const getWhichUserAccountName = () => {
  const accountnameFromParams = new URLSearchParams(window.location.search).get(
    "accountname",
  );
  const accountnameFromlocalStorage = JSON.parse(
    localStorage.getItem("userInfo"),
  )?.user?.accountname;

  return accountnameFromParams
    ? accountnameFromParams
    : accountnameFromlocalStorage;
};
