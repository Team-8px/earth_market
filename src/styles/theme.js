const pixelToPx = size => `${size / 16}px`;

const fontSizes = {
  titleText: pixelToPx(24),
  subTitleText: pixelToPx(16),
  commonText: pixelToPx(14),
  smallText: pixelToPx(12),
  iconText: pixelToPx(10),
};

const palette = {
  main: "#3f97fb",
  white: "#ffffff",
  lightMain: "#9fcbfd",
  bg: "#f2f2f2",
  subText: "#767676",
  lightGray: "#c4c4c4",
  btnDisabled: "#ffc7a7",
  border: "#dbdbdb",
  waring: "#EB5757",
  kakao: "#F2C94C",
  google: "#767676",
  faceBook: "#2D9CDB",
  black: "#000000",
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
  palette,
  common,
};

export default theme;
