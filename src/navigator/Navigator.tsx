import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";
import Screen5 from "../screens/Screen5";

export type RootStackParam = {
  Home: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
  Screen5: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParam>;

const Navigator = () => {
  const Stack = createNativeStackNavigator<RootStackParam>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
