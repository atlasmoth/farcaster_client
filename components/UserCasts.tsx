import * as React from "react";
import { FlatList, StatusBar, TouchableOpacity, Text } from "react-native";
import CastListItem from "./CastListItem";
import {
  AIRSTACK_URL,
  cleanHashtag,
  colors,
  getNftUsers,
  getPoapUsers,
  sharedContainerStyles,
} from "../utils/sharedStyles";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default function UserCasts({ navigation }) {
  const { index, routes } = navigation.getState();
  const stateItems = routes[index].params;
  const [farcasterIds, setFarcasterIds] = React.useState<string[]>([]);
  console.log(farcasterIds);
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
        setFarcasterIds([...new Set(fids.map((a) => a.userId))]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
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
