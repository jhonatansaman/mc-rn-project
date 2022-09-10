import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import useFont from "src/hooks/useFont";
import GlobalStyle from "src/styles/globals";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import Routes from "./src";

const queryClient = new QueryClient();

export default function App() {
  const isFontLoaded = useFont();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {isFontLoaded && <Routes />}
        </QueryClientProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
