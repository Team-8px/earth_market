const pixelToPx = size => `${size / 16}px`;

const fontSizes = {
  titleText: pixelToPx(24),
  subTitleText: pixelToPx(16),
  commonText: pixelToPx(14),
  smallText: pixelToPx(12),
  iconText: pixelToPx(10),
};

const colors = {
  mainColor: "#f26e22",
  bgColor: "#f2f2f2",
  subTextColor: "#767676",
  LightGray: "#c4c4c4",
  btnDisabledColor: "#ffc7a7",
  borderColor: "#dbdbdb",
  waringColor: "#EB5757",
  kakaoColor: "#F2C94C",
  googleColor: "#767676",
  faceBookColor: "#2D9CDB",
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
    `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    `,
  flexSpaceBetween: `
    display: flex;
    justify-contents: space-between;
    align-items: center;
    `,
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;
