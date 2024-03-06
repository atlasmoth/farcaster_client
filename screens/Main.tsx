import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Casts from "./../components/Casts";
import Search from "./../components/Search";
import { colors, sharedContainerStyles } from "../utils/sharedStyles";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#000",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // @ts-ignore
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            {label === "Home" ? (
              <Ionicons
                name={isFocused ? "home" : "home-outline"}
                size={20}
                color={isFocused ? colors.bgWhite : colors.grey}
              />
            ) : null}
            {label === "Search" ? (
              <Ionicons
                name={isFocused ? "search" : "search-outline"}
                size={20}
                color={isFocused ? colors.bgWhite : colors.grey}
              />
            ) : null}
            {label === "Channels" ? (
              <Ionicons
                name={
                  isFocused ? "chatbox-ellipses" : "chatbox-ellipses-outline"
                }
                size={20}
                color={isFocused ? colors.bgWhite : colors.grey}
              />
            ) : null}
            {label === "Notifications" ? (
              <Ionicons
                name={isFocused ? "notifications" : "notifications-outline"}
                size={20}
                color={isFocused ? colors.bgWhite : colors.grey}
              />
            ) : null}

            <Text
              style={{
                color: isFocused ? colors.bgWhite : colors.grey,
                fontSize: 11,
                lineHeight: 14,
                marginTop: 5,
                fontFamily: "Chirp_Bold",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default function MainTab(): JSX.Element {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: colors.bgWhite,
            fontFamily: "Chirp_Bold",
            fontSize: 16,
            lineHeight: 20,
          },
          headerStyle: {
            backgroundColor: "#000",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
        component={Casts}
      />

      <Tab.Screen
        name="Channels"
        options={{
          headerTitle: "Channels",
          headerTitleStyle: {
            color: colors.bgWhite,
            fontFamily: "Chirp_Bold",
            fontSize: 16,
            lineHeight: 20,
          },
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#000",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
        component={Search}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          headerTitle: "Notifications",
          headerTitleStyle: {
            color: colors.bgWhite,
            fontFamily: "Chirp_Bold",
            fontSize: 16,
            lineHeight: 20,
          },
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#000",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
        component={EmptyScreen}
      />
    </Tab.Navigator>
  );
}

function EmptyScreen() {
  return (
    <ScrollView
      style={[sharedContainerStyles.container, { flex: 1 }]}
    ></ScrollView>
  );
}
