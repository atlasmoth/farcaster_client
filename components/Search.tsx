import {
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  RefreshControl,
} from "react-native";
import {
  colors,
  shuffleArray,
  Token,
  getPoaps,
  getGqlQuery,
  AIRSTACK_URL,
  removeDuplicates,
} from "../utils/sharedStyles";
import { memo, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { blurhash } from "./CastListItem";

export default function Search({ navigation }) {
  const [cursor, setCursor] = useState<{
    erc721: null | string;
    poap: null | string;
  }>({
    erc721: "",
    poap: "",
  });
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<Token>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getDataFunc = async () => {
      setLoading(true);
      let tempArray = [];
      const tempCursor: any = {};

      if (cursor.erc721 !== null) {
        const ercData = await axios.post(
          AIRSTACK_URL,
          getGqlQuery({
            erc721Cursor: cursor.erc721,
          })
        );
        tempArray = tempArray.concat(
          (ercData.data?.data?.Tokens?.Token || []).filter(
            (t) => t?.logo?.small && t?.name
          )
        );
        tempCursor.erc721 = ercData.data.data.Tokens.pageInfo.nextCursor;
      }

      if (cursor.poap !== null) {
        const poapsData = await axios.post(
          AIRSTACK_URL,
          getPoaps({ cursor: cursor.poap })
        );
        tempArray = tempArray.concat(
          (poapsData?.data?.data?.Poaps?.Poap || []).filter(
            (t) => t?.poapEvent?.contentValue?.image?.small
          )
        );
        tempCursor.poap = poapsData.data.data.Poaps.pageInfo.nextCursor;
      }

      setTokens((t: Token) =>
        removeDuplicates([...t, ...shuffleArray(tempArray)])
      );
      setCursor((s) => ({
        ...s,
        ...tempCursor,
      }));
    };
    getDataFunc()
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  }, [setTokens, setCursor, counter]);

  const FlatItem = useCallback(({ item }) => {
    return <MemoizedSearchItem item={item} navigation={navigation} />;
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.bgWhite}
        animated={false}
      />

      <FlatList
        keyExtractor={(item) => item.address || item.eventId}
        refreshControl={<RefreshControl refreshing={loading} />}
        onEndReached={async () => {
          if (loading) {
            return;
          }
          setCounter((t) => t + 1);
        }}
        style={[{ paddingBottom: 100, backgroundColor: colors.bgWhite }]}
        contentContainerStyle={[{ flexGrow: 1 }]}
        data={tokens}
        renderItem={FlatItem}
      />
    </>
  );
}

function SearchItem({ item, navigation }: { item: Token[0]; navigation: any }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UserCasts", {
          title: item?.name || item?.poapEvent?.eventName,
          address: item.address,
          eventId: item.eventId,
        });
      }}
      style={[
        {
          marginHorizontal: 12,
          flexDirection: "row",
          alignItems: "flex-start",
          paddingVertical: 12,
          marginTop: 10,
          borderColor: colors.bgWhiteTransparent,
          borderWidth: 0.3,
          borderRadius: 12,
          paddingHorizontal: 12,
        },
      ]}
    >
      <Image
        style={[
          {
            width: 40,
            height: 40,
            borderRadius: 30,
            objectFit: "cover",
            flexShrink: 0,
          },
        ]}
        source={{
          uri: (item.poapEvent
            ? item?.poapEvent?.contentValue?.image?.small
            : item?.logo?.small) as string,
        }}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <View style={[{ flex: 1, marginLeft: 10, marginRight: 20 }]}>
        <Text
          style={[
            {
              color: colors.black,
              fontFamily: "Chirp_Bold",
              fontSize: 15,
              lineHeight: 20,
              fontWeight: "700",
              marginBottom: 5,
            },
          ]}
        >
          {item?.name || item?.poapEvent?.eventName}
        </Text>
        <Text
          style={[
            {
              fontSize: 12,
              lineHeight: 18,
              color: colors.grey,
              fontFamily: "Chirp_Bold",
            },
          ]}
        >
          {!item.eventId ? "NFT" : "POAP"}
        </Text>
        <Text
          style={[
            {
              fontSize: 12,
              lineHeight: 18,
              color: colors.grey,
              fontFamily: "Chirp_Bold",
            },
          ]}
        >
          {!item.eventId ? (
            <Text>Address: {item.address}</Text>
          ) : (
            <Text>Event ID: {item.eventId}</Text>
          )}
        </Text>
      </View>

      <AntDesign
        name="right"
        size={20}
        color={colors.bgWhiteTransparent}
        style={[{ marginLeft: "auto", flexShrink: 0 }]}
      />
    </TouchableOpacity>
  );
}
const MemoizedSearchItem = memo(SearchItem);

const searchStyles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bgWhiteTransparent,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
