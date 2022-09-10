import Home from "src/pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
const MainStack = createStackNavigator();

const Routes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default Routes;
