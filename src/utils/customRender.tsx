import { render } from "@testing-library/react-native";
import React, { ReactElement } from "react";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";
// override render method
export { customRender as render };
