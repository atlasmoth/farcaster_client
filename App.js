import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Caster from "./screens/Cast";
import { colors } from "./utils/sharedStyles";
import Casts from "./components/Casts";
import Search from "./components/Search";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Chirp_Bold: require("./assets/fonts/chirp_bold.otf"),
    Chirp_Regular: require("./assets/fonts/chirp_regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Trending 📡"
          component={Casts}
          options={{
            headerTitleStyle: {
              color: colors.black,
              fontFamily: "Chirp_Bold",
            },
          }}
        />
        <Stack.Screen
          name="Cast 🔊"
          component={Caster}
          options={{
            headerTitleStyle: {
              color: colors.black,
              fontFamily: "Chirp_Bold",
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTitleStyle: {
              color: colors.black,
              fontFamily: "Chirp_Bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
