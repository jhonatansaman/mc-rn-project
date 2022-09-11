import { CommonActions, StackActionType } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Product } from "src/components/organisms/ProductDetails/types";

export enum Screen {
  HOME = "HOME",
  PRODUCT_MODAL = "PRODUCT_MODAL",
}

export type RootStackParamList = {
  [Screen.HOME]: {};
  [Screen.PRODUCT_MODAL]: { product: Product | null };
};

export type NavigationAction = CommonActions.Action | StackActionType;

export type RootNativeStackScreenProps<S extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, S>;
