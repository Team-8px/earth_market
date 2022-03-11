export const changeCommaPrice = price => {
  return String(price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};

export const changeUncommaPrice = price => {
  return Number(String(price).replace(/[^\d]+/g, ""));
};
