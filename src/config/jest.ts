import "react-native-gesture-handler/jestSetup";
import { navigateScreen } from "src/helpers/navigationService";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("../helpers/navigationService.ts", () => ({
  findActiveRoute: jest.fn(),
  setNavigator: jest.fn(),
  customNavigationAction: jest.fn(),
  navigateScreen: jest.fn(),
  resetAppScreen: jest.fn(),
  resetAppRoutes: jest.fn(),
  replaceScreen: jest.fn(),
  goBack: jest.fn(),
  popScreen: jest.fn(),
  popToTopScreen: jest.fn(),
}));

export const getMockedNavigateScreen = () => {
  jest.mock("../helpers/navigationService", () => ({
    navigateScreen: jest.fn(),
  }));
  const mockedNavigateScreen = navigateScreen as jest.Mock;

  return mockedNavigateScreen;
};
