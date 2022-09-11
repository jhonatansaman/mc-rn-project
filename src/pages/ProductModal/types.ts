import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, Screen } from "src/helpers/types";

export interface Props {
  route: RouteProp<RootStackParamList, Screen.PRODUCT_MODAL>;
}
