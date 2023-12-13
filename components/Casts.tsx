import * as React from "react";
import {
  FlatList,
  StatusBar,
  TouchableOpacity,
  Text,
  RefreshControl,
} from "react-native";
import { CastListItem } from "./CastListItem";
import { colors, sharedContainerStyles } from "../utils/sharedStyles";
import { Ionicons } from "@expo/vector-icons";
import { Cast } from "./castTypes";
import axios from "axios";

export default function Casts({ navigation }) {
  const [data, setData] = React.useState<Cast[]>([]);
  const [counter, setCounter] = React.useState(0);
  const [cursor, setCursor] = React.useState();
  const [loading, setLoading] = React.useState(true);
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
  React.useEffect(() => {
    const getCasts = async () => {
      try {
        console.log(cursor);
        if (cursor === null) return;
        setLoading(true);

        const neynarUrl = new URL(`https://api.neynar.com/v2/farcaster/feed`);
        neynarUrl.searchParams.append("feed_type", "filter");
        neynarUrl.searchParams.append("filter_type", "global_trending");
        neynarUrl.searchParams.append("with_recasts", "true");
        neynarUrl.searchParams.append("limit", "100");
        if (cursor) {
          neynarUrl.searchParams.append("cursor", cursor as string);
        }
        const results = await axios.get(neynarUrl.href, {
          headers: { Api_key: process.env.EXPO_PUBLIC_API_KEY },
        });

        setData((t) => [...t, ...results.data.casts]);
        setCursor(results.data?.next?.cursor);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCasts();
  }, [counter, setCounter, setData, setCursor]);

  const FlatItem = React.useCallback(({ item }) => {
    return <CastListItem data={item} />;
  }, []);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.bgWhite}
        animated={false}
      />
      <FlatList
        keyExtractor={(item) => item.hash}
        refreshControl={<RefreshControl refreshing={loading} />}
        onEndReached={() => {
          if (loading) {
            return;
          }
          setCounter((t) => t + 1);
        }}
        data={data}
        renderItem={FlatItem}
        contentContainerStyle={[sharedContainerStyles.container]}
      />
    </>
  );
}
