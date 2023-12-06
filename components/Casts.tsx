import * as React from "react";
import { FlatList, StatusBar, TouchableOpacity, Text } from "react-native";
import CastListItem from "./CastListItem";
import { colors, sharedContainerStyles } from "../utils/sharedStyles";
import { Ionicons } from "@expo/vector-icons";

export default function Casts({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Ionicons name="filter" size={24} color={colors.grey} />
          <Text
            style={[
              {
                fontFamily: "Chirp_Bold",
                fontSize: 14,
                lineHeight: 20,
                color: colors.grey,
                fontWeight: "500",
                marginLeft: 3,
              },
            ]}
          >
            Filter
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.bgWhite}
        animated={false}
      />
      <FlatList
        onEndReached={({ distanceFromEnd }) => {
          console.log(distanceFromEnd);
        }}
        data={["amen", "halelujah"]}
        renderItem={(d) => <CastListItem />}
        contentContainerStyle={[sharedContainerStyles.container]}
      />
    </>
  );
}
