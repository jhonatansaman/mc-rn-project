import Home from "src/pages/Home";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ProductModal from "./pages/ProductModal";
import { Screen } from "./helpers/types";
const MainStack = createStackNavigator();

const Routes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ cardOverlayEnabled: false }}
      />
      <MainStack.Screen
        name={Screen.PRODUCT_MODAL}
        component={ProductModal as React.ComponentType<any>}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          cardStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default Routes;
