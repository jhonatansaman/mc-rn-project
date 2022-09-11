import {
  CommonActions,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { Keyboard } from "react-native";
import { NavigationAction, RootStackParamList, Screen } from "./types";

export const navigationRef = createNavigationContainerRef();

export const getNavigator = () => {
  if (!navigationRef.current || !navigationRef.isReady()) {
    throw new Error("The navigator is not ready");
  }

  return navigationRef.current;
};

export type NavigateParams<RouteName extends Screen> =
  RouteName extends keyof RootStackParamList
    ? undefined extends RootStackParamList[RouteName]
      ?
          | [screen: RouteName]
          | [screen: RouteName, params: RootStackParamList[RouteName]]
      : [screen: RouteName, params: RootStackParamList[RouteName]]
    : [screen: RouteName];

export function customNavigationAction(action: NavigationAction) {
  Keyboard.dismiss();
  getNavigator()?.dispatch(action);
}

export function navigateScreen<RouteName extends Screen>(
  ...[name, params]: NavigateParams<RouteName>
) {
  customNavigationAction(
    CommonActions.navigate({
      name,
      params,
    })
  );
}
