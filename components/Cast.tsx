import { FlatList, RefreshControl } from "react-native";
import { sharedContainerStyles } from "../utils/sharedStyles";
import { MainListItem, ReplyListItem } from "./CastListItem";
import { Cast } from "./castTypes";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Caster(): JSX.Element {
  const navigation = useNavigation() as unknown as any;
  const { index, routes } = navigation.getState();
  const stateItems = routes[index].params as Cast;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Cast[]>([stateItems]);

  useEffect(() => {
    const getCasts = async () => {
      try {
        setLoading(true);
        const neynarUrl = new URL(
          `https://api.neynar.com/v1/farcaster/all-casts-in-thread`
        );

        neynarUrl.searchParams.append("threadHash", stateItems.hash);

        const results = await axios.get(neynarUrl.href, {
          headers: { Api_key: process.env.EXPO_PUBLIC_API_KEY },
        });

        setData((t) => [
          ...t,
          ...results.data.result.casts
            .slice(1, results.data.result.casts.length + 1)
            .filter((t) => t.parentHash === stateItems.hash),
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCasts();
  }, [setData, stateItems]);

  const FlatItem = useCallback(({ item, index }) => {
    if (index === 0) return <MainListItem data={item} />;
    return <ReplyListItem data={item} />;
  }, []);

  return (
    <FlatList
      keyExtractor={(item) => item.hash}
      refreshControl={<RefreshControl refreshing={loading} />}
      data={data}
      style={[sharedContainerStyles.container]}
      renderItem={FlatItem}
    />
  );
}
