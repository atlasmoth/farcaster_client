import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Caster from "./screens/Cast";
import { colors } from "./utils/sharedStyles";
import Search from "./components/Search";
import UserCasts from "./components/UserCasts";
import MainTab from "./screens/Main";
import { StatusBar } from "expo-status-bar";
import DexscreenerWebview from "./components/DexscreenerWebview";
import CreateCast from "./screens/CreateCast";
import "./sheets";
import { SheetProvider } from "react-native-actions-sheet";

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
    <SheetProvider>
      <StatusBar
        style="dark"
        barStyle="dark-content"
        backgroundColor={colors.black}
        animated={true}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Casts"
            component={MainTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cast"
            component={CreateCast}
            options={{
              title: "Cast",
              headerTitleStyle: {
                color: "transparent",
                fontFamily: "Chirp_Bold",
                fontSize: 16,
                lineHeight: 20,
              },
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#000",
                backgroundColor: "#000",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="Cast 🔊"
            component={Caster}
            options={{
              headerTitleStyle: {
                color: colors.bgWhite,
                fontFamily: "Chirp_Bold",
                fontSize: 16,
                lineHeight: 20,
              },
              headerTitleAlign: "left",
              headerStyle: {
                backgroundColor: "#000",
                backgroundColor: "#000",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="UserCasts"
            component={UserCasts}
            options={{
              title: "Channel",
              headerTitleStyle: {
                color: colors.bgWhite,
                fontFamily: "Chirp_Bold",
                fontSize: 16,
                lineHeight: 20,
              },
              headerTitleAlign: "left",
              headerTitle: "Channel",
              headerStyle: {
                backgroundColor: "#000",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="DexscreenerWebview"
            component={DexscreenerWebview}
            options={{
              headerTitleStyle: {
                color: colors.bgWhite,
                fontFamily: "Chirp_Bold",
                fontSize: 16,
                lineHeight: 20,
              },
              headerTitleAlign: "left",
              headerTitle: "Token",
              headerStyle: {
                backgroundColor: "#000",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SheetProvider>
  );
}
