export const changeDefaltImage = image => {
  if (image === "http://146.56.183.55:5050/Ellipse.png") {
    image = "http://127.0.0.1:5502/src/svg/basic-profile-img.svg";
  }
  return image;
};
