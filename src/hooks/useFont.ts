import { useFonts } from "expo-font";

const useFont = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Medium.ttf"),
  });

  return fontsLoaded;
};

export default useFont;
