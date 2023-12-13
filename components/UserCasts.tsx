import * as React from "react";
import { FlatList, StatusBar, View, Text, RefreshControl } from "react-native";
import { CastListItem } from "./CastListItem";
import {
  AIRSTACK_URL,
  cleanHashtag,
  colors,
  getNftUsers,
  getPoapUsers,
  sharedContainerStyles,
} from "../utils/sharedStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { Cast } from "./castTypes";

export default function UserCasts({ navigation }) {
  const { index, routes } = navigation.getState();
  const [loading, setLoading] = React.useState(true);

  const stateItems = routes[index].params;
  const [farcasterIds, setFarcasterIds] = React.useState<string[]>([]);
  const [data, setData] = React.useState<Cast[]>([]);
  const [counter, setCounter] = React.useState(0);
  const [cursor, setCursor] = React.useState();

  React.useEffect(() => {
    navigation.setOptions({ title: `#${cleanHashtag(stateItems.title)}` });
    const getData = async () => {
      try {
        let fids = [];
        if (stateItems.address) {
          const nftData = await axios.post(
            AIRSTACK_URL,
            getNftUsers({ address: stateItems.address })
          );

          fids =
            nftData.data.data?.TokenBalances?.TokenBalance?.map(({ owner }) =>
              owner?.socials?.length > 0 ? owner?.socials : null
            )
              .filter(Boolean)
              .flat(2)
              .filter(
                (address, index, array) => array.indexOf(address) === index
              ) ?? [];
        } else {
          const poapData = await axios.post(
            AIRSTACK_URL,
            getPoapUsers({ address: stateItems.eventId })
          );
          fids =
            poapData.data.data?.Poaps?.Poap?.map(({ owner }) =>
              owner?.socials?.length > 0 ? owner?.socials : null
            )
              .filter(Boolean)
              .flat(2)
              .filter(
                (address, index, array) => array.indexOf(address) === index
              ) ?? [];
        }
        const tempIds = [...new Set(fids.map((a) => a.userId))];
        setFarcasterIds(tempIds);
        if (tempIds.length === 0) {
          setCursor(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [navigation]);
  React.useEffect(() => {
    const getCasts = async () => {
      try {
        if (farcasterIds.length < 1) return;
        if (cursor === null) return;
        setLoading(true);
        const neynarUrl = new URL(`https://api.neynar.com/v2/farcaster/feed`);
        neynarUrl.searchParams.append("feed_type", "filter");
        neynarUrl.searchParams.append("filter_type", "fids");
        neynarUrl.searchParams.append("with_recasts", "true");
        neynarUrl.searchParams.append("limit", "100");
        neynarUrl.searchParams.append("fids", farcasterIds.join(","));
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
  }, [farcasterIds, counter, setCounter, setData, setCursor]);

  const FlatItem = React.useCallback(({ item }) => {
    return <CastListItem data={item} />;
  }, []);
  if (!loading && cursor === null && data.length === 0) {
    return (
      <View
        style={[
          sharedContainerStyles.container,
          {
            alignItems: "center",
            paddingHorizontal: 12,
            paddingTop: 50,
          },
        ]}
      >
        <MaterialCommunityIcons
          name="timer-sand-empty"
          size={40}
          color={colors.grey}
        />
        <Text
          style={[
            {
              marginTop: 10,
              color: colors.black,
              fontSize: 16,
              lineHeight: 24,
              fontWeight: "600",
              fontFamily: "Chirp_Bold",
            },
          ]}
        >
          No casts available
        </Text>
      </View>
    );
  }
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
