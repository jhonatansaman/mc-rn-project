import { ThemeType } from "src/styles/theme";
import { ThemeProps } from "styled-components";

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.png";
declare module "@env";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      translucent: string;
    };
  }
}
