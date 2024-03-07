import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { colors } from "../utils/sharedStyles";
import { Image } from "expo-image";
import { blurhash } from "./../components/CastListItem";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import ActionSheet, {
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";

export default function CreateCast({ navigation }) {
  const [castText, setCastText] = useState("");
  const [media, setMedia] = useState<string[]>([]);

  const HeaderButton = useCallback(() => {
    return (
      <TouchableOpacity
        style={[
          {
            backgroundColor: colors.bgWhite,
            borderRadius: 10,
            marginLeft: 20,
            flexShrink: 0,
            borderColor: "rgba(255, 255, 255, 0.7)",
            borderWidth: 1,
          },
        ]}
      >
        <Text
          style={[
            {
              fontSize: 12,
              lineHeight: 18,
              color: colors.black,
              fontFamily: "Chirp_Bold",
              paddingVertical: 5,
              paddingHorizontal: 15,
            },
          ]}
        >
          Cast
        </Text>
      </TouchableOpacity>
    );
  }, [castText]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: (props) => <HeaderButton {...props} />,
    });
  }, [castText, navigation]);

  return (
    <View
      style={[
        {
          flexGrow: 1,
          justifyContent: "space-between",
          backgroundColor: "#000",
        },
      ]}
    >
      <ScrollView
        style={[
          {
            flex: 1,
          },
        ]}
      >
        <View
          style={[
            {
              paddingHorizontal: 12,
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "flex-start",
            },
          ]}
        >
          <View style={[{ flexBasis: 60, flexShrink: 0 }]}>
            <Image
              style={[
                {
                  width: 35,
                  height: 35,
                  borderRadius: 30,
                  objectFit: "cover",
                  flexShrink: 0,
                  marginRight: "auto",
                  marginLeft: "auto",
                },
              ]}
              source={{
                uri: "https://i.imgur.com/uf8c05W.jpg",
              }}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View style={[{ flex: 1 }]}>
            <TextInput
              placeholder="What is happening?"
              multiline={true}
              onChangeText={setCastText}
              placeholderTextColor={colors.grey}
              style={[
                {
                  width: "100%",
                  borderWidth: 0,
                  borderColor: "transparent",
                  fontSize: 16,
                  lineHeight: 24,
                  color: colors.bgWhite,
                  fontFamily: "Chirp_Bold",
                  padding: 0,
                  marginBottom: 40,
                  fontWeight: "300",
                },
              ]}
            />
            <Gallery urls={media} setUrls={setMedia} />
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          {
            flexShrink: 0,
            paddingHorizontal: 12,
            paddingVertical: 16,
            borderTopColor: "rgba(255,255,255,0.1)",
            borderTopWidth: 0.3,
            borderBottomColor: "rgba(255,255,255,0.1)",
            borderBottomWidth: 0.3,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            console.log("this is running");
            SheetManager.show("channels-sheet", {
              payload: {
                remove: () => {
                  SheetManager.hide("channels-sheet");
                },
                edit: () => {
                  SheetManager.hide("channels-sheet");
                },
              },
            });
          }}
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            },
          ]}
        >
          <Text
            style={[
              {
                color: colors.bgWhite,
                fontFamily: "Chirp_Bold",
                fontSize: 16,
                lineHeight: 20,
                marginRight: 3,
              },
            ]}
          >
            /channel
          </Text>
          <FontAwesome
            name={"angle-up"}
            size={30}
            color={colors.bgWhite}
            style={[{ marginBottom: 5, marginLeft: 2 }]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            DocumentPicker.getDocumentAsync({
              multiple: true,
              type: ["image/*"],
            })
              .then((e) => {
                setMedia([
                  ...new Set([...media, ...e.assets.map((t) => t.uri)]),
                ]);
              })
              .catch(console.log);
          }}
        >
          <Ionicons name="image-outline" size={24} color={colors.bgWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Gallery({
  urls,
  setUrls,
}: {
  urls: any[];
  setUrls: Function;
}): JSX.Element {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        },
      ]}
    >
      {urls.map((url, index, arr) => {
        return (
          <View
            key={url}
            style={[
              castListItemStyles.galleryItem,
              index % 2 === 0 && arr[index + 1] ? { marginRight: 10 } : {},
              { position: "relative" },
            ]}
          >
            <Image
              source={{ uri: url }}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
              style={[
                {
                  objectFit: "cover",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                },
              ]}
            />
            <TouchableOpacity
              onPress={() => {
                setUrls((t) =>
                  t.filter((_, nestedIndex) => index !== nestedIndex)
                );
              }}
              style={[
                {
                  position: "absolute",
                  backgroundColor: colors.black,
                  top: 10,
                  right: 10,
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Entypo name="cross" size={20} color="white" />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
const castListItemStyles = StyleSheet.create({
  avatar: { width: 36, height: 36, borderRadius: 36, objectFit: "cover" },
  centerView: { justifyContent: "center" },
  splitArticle: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  itemContainer: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bgWhiteTransparent,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  lightSubText: {
    color: colors.grey,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Chirp_Regular",
  },
  thumbnail: {
    width: 16,
    height: 16,
    borderRadius: 500,
    objectFit: "cover",
  },
  thumbnails: {
    width: 36,
    marginRight: 10,
  },
  secondThumbnail: {
    marginLeft: -6,
  },
  galleryItem: {
    flexBasis: "47%",
    borderRadius: 15,
    minHeight: 140,
    flex: 1,
    overflow: "hidden",
    marginBottom: 10,
  },
});
