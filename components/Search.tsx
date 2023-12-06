import {
  StatusBar,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import {
  colors,
  sharedContainerStyles,
  shuffleArray,
  Token,
  getPoaps,
  getGqlQuery,
  AIRSTACK_URL,
} from "../utils/sharedStyles";
import { Feather } from "@expo/vector-icons";
import { memo, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { blurhash } from "./CastListItem";

export default function Search() {
  const [cursor, setCursor] = useState<{
    erc721: null | string;
    poap: null | string;
  }>({
    erc721: "",
    poap: "",
  });
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<Token>([]);
  const [searchText, setSearchText] = useState("");
  const [tempText, setTempText] = useState("");
  const inputRef = useRef<any>();

  useEffect(() => {
    const getDataFunc = async () => {
      if (searchText.length < 1) return;
      const poapsData = await axios.post(
        AIRSTACK_URL,
        getPoaps({ address: searchText, cursor: cursor.poap })
      );

      const ercData = await axios.post(
        AIRSTACK_URL,
        getGqlQuery({
          address: searchText,
          erc721Cursor: cursor.erc721,
        })
      );

      let tempArray = [
        ...(ercData.data?.data?.erc721?.data || []),
        ...(poapsData?.data?.data?.Poaps?.Poap || []),
      ];
      setTokens((t: Token) => [...t, ...shuffleArray(tempArray)]);
      setCursor((s) => ({
        ...s,
        erc721: ercData.data.data.erc721.pageInfo.nextCursor,
        poap: poapsData.data.data.Poaps.pageInfo.nextCursor,
      }));
    };
    getDataFunc()
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setTokens([]);
      setCursor({
        erc721: "",
        poap: "",
      });
    };
  }, [searchText, setSearchText, setTempText, setTokens, setCursor]);

  return (
    <View style={[sharedContainerStyles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.bgWhite}
        animated={false}
      />
      <View
        style={[
          searchStyles.flexRow,
          { marginHorizontal: 12, marginVertical: 10, marginTop: 30 },
        ]}
      >
        <View style={[searchStyles.flexRow, { position: "relative", flex: 1 }]}>
          <Feather
            name="search"
            size={24}
            color={colors.grey}
            style={[{ marginLeft: 10 }]}
          />
          <TextInput
            ref={inputRef}
            placeholder="Enter address"
            placeholderTextColor={colors.grey}
            value={tempText}
            onChangeText={setTempText}
            style={[
              {
                position: "absolute",
                paddingLeft: 45,
                paddingRight: 10,
                left: 0,
                right: 0,
                zIndex: 10,
                borderColor: colors.bgWhiteTransparent,
                borderRadius: 12,
                paddingVertical: 8,
                borderWidth: 1,
                color: colors.black,
                fontSize: 14,
                lineHeight: 20,
                fontFamily: "Chirp_Bold",
                fontWeight: "500",
              },
            ]}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (tempText.length < 1) return;
            setLoading(true);
            setCursor({ poap: "", erc721: "" });
            setTokens([]);
            setSearchText(tempText);
          }}
        >
          <Text
            style={[
              {
                marginHorizontal: 10,
                color: colors.black,
                fontSize: 16,
                lineHeight: 24,
                fontWeight: "700",
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: "#efefef",
                borderRadius: 12,
              },
            ]}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[{ marginTop: 5 }]}></View>
      {loading && (
        <View>
          <ActivityIndicator size="small" color={colors.grey} />
        </View>
      )}
      <FlatList
        onEndReached={async () => {
          if (loading) {
            return;
          }
          try {
            setLoading(true);
            let tempArray = [];
            let tempCursor = { ...cursor };
            if (cursor.poap.length > 0) {
              const poapsData = await axios.post(
                AIRSTACK_URL,
                getPoaps({ address: searchText, cursor: cursor.poap })
              );
              tempArray = tempArray.concat(
                poapsData?.data?.data?.Poaps?.Poap || []
              );
              tempCursor.poap = poapsData.data.data.Poaps.pageInfo.nextCursor;
            }
            if (cursor.erc721.length > 0) {
              const ercData = await axios.post(
                AIRSTACK_URL,
                getGqlQuery({
                  address: searchText,
                  erc721Cursor: cursor.erc721,
                })
              );

              tempArray = tempArray.concat(
                ercData.data?.data?.erc721?.data || []
              );
              tempCursor.erc721 = ercData.data.data.erc721.pageInfo.nextCursor;
            }
            setCursor((s) => ({
              ...s,
              erc721: tempCursor.erc721,
              poap: tempCursor.poap,
            }));
            setTokens((t: Token) => [...t, ...shuffleArray(tempArray)]);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
        contentContainerStyle={[{ paddingBottom: 100 }]}
        nestedScrollEnabled={true}
        data={tokens}
        renderItem={({ item }) => {
          return <MemoizedSearchItem item={item} />;
        }}
      />
    </View>
  );
}

function SearchItem({ item }: { item: Token[0] }) {
  return (
    <TouchableOpacity
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
            ? item?.poapEvent?.contentValue?.image?.medium
            : item?.token?.logo?.medium) as string,
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
          {item?.token?.name || item.poapEvent.eventName}
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
          {item?.token?.name ? "NFT" : "POAP"}
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
          {item?.token?.name ? (
            <Text>Token ID: {item.tokenAddress}</Text>
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
