import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
    translucent: "#D8D8D8",
    loading: "#707070",
  },
};

export type ThemeType = typeof theme;

export default theme;
