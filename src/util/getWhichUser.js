export const getWhichUserStatus = () => {
  const params = window.location.pathname.split("/");

  const accountnameFromParams = params[2];

  return accountnameFromParams ? "you" : "my";
};

export const getWhichUserAccountName = () => {
  const accountnameFromParams = window.location.pathname.split("/")[2];

  const accountnameFromlocalStorage = JSON.parse(
    localStorage.getItem("userInfo"),
  )?.user?.accountname;

  return accountnameFromParams
    ? accountnameFromParams
    : accountnameFromlocalStorage;
};

export const getAccountNameFromloacalStorage = () => {
  return JSON.parse(localStorage.getItem("userInfo"))?.user?.accountname;
};
