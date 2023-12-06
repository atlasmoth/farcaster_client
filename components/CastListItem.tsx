import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors } from "./../utils/sharedStyles";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const blurhash = "L5KUl|IA0Kay~WWBWVj]00ayaeWC";

export default function CastListItem({}: {}) {
  const navigation = useNavigation() as unknown as any;

  return (
    <TouchableOpacity
      style={[castListItemStyles.itemContainer]}
      onPress={() => {
        navigation.navigate("Cast 🔊");
      }}
    >
      <View style={[castListItemStyles.splitArticle]}>
        <View
          style={[
            {
              width: 36,
              marginRight: 10,
              height: "100%",
              alignItems: "center",
            },
          ]}
        >
          <Image
            style={[castListItemStyles.avatar]}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
          <View
            style={[
              {
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: "rgb(229,229,229)",
                width: 2,
                flexGrow: 1,
              },
            ]}
          ></View>
        </View>
        <View style={[{ flex: 1 }]}>
          <View
            style={[
              castListItemStyles.flexRow,
              { marginBottom: 5, alignItems: "flex-start" },
            ]}
          >
            <View style={[{ flex: 1 }]}>
              <Text
                style={[
                  {
                    fontFamily: "Chirp_Bold",
                    fontSize: 16,
                    lineHeight: 24,
                    color: colors.black,
                  },
                ]}
              >
                Macrocephalopod
              </Text>
              <Text
                style={[
                  {
                    fontSize: 14,
                    lineHeight: 20,
                    color: colors.grey,
                    fontFamily: "Chirp_Regular",
                  },
                ]}
              >
                @macroboi
              </Text>
            </View>
            <Text
              style={[
                {
                  fontSize: 14,
                  lineHeight: 20,
                  color: colors.grey,
                  fontFamily: "Chirp_Regular",
                },
              ]}
            >
              30m
            </Text>
          </View>
          <Text
            style={[
              {
                marginBottom: 10,
                fontFamily: "Chirp_Regular",
                color: colors.black,
                fontSize: 14,
                lineHeight: 20,
              },
            ]}
          >
            by The people of northern Ghana Serving temperature mostly hot Main
            ingredients beans and rice Media: Waakye Waakye (/ˈwɑːtʃeɪ/
            WAH-chay)[2] is a Ghanaian dish of cooked rice and beans, commonly
            eaten for breakfast or lunch.
          </Text>
          <Gallery />
        </View>
      </View>
      <View style={[castListItemStyles.flexRow]}>
        <View
          style={[
            castListItemStyles.flexRow,
            castListItemStyles.thumbnails,
            castListItemStyles.centerView,
          ]}
        >
          <Image
            style={[castListItemStyles.thumbnail]}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
          <Image
            style={[
              castListItemStyles.thumbnail,
              castListItemStyles.secondThumbnail,
            ]}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <Feather name="message-circle" size={20} color={colors.grey} />
        <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
          46
        </Text>
        <AntDesign
          name="retweet"
          size={20}
          color={colors.grey}
          style={[{ marginLeft: 10 }]}
        />
        <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
          20
        </Text>
        <AntDesign
          name="hearto"
          size={20}
          color={colors.grey}
          style={[{ marginLeft: 10 }]}
        />
        <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
          15
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export function MainListItem({}: {}) {
  return (
    <View style={[castListItemStyles.itemContainer, { marginBottom: 20 }]}>
      <View style={[castListItemStyles.splitArticle]}>
        <View style={[{ flex: 1 }]}>
          <View
            style={[
              castListItemStyles.flexRow,
              { marginBottom: 5, alignItems: "flex-start" },
            ]}
          >
            <View
              style={[
                {
                  width: 36,
                  marginRight: 10,
                  height: "100%",
                },
              ]}
            >
              <Image
                style={[castListItemStyles.avatar]}
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View style={[{ flex: 1 }]}>
              <Text
                style={[
                  {
                    fontFamily: "Chirp_Bold",
                    fontSize: 16,
                    lineHeight: 24,
                    color: colors.black,
                  },
                ]}
              >
                Macrocephalopod
              </Text>
              <Text
                style={[
                  {
                    fontSize: 14,
                    lineHeight: 20,
                    color: colors.grey,
                    fontFamily: "Chirp_Regular",
                  },
                ]}
              >
                @macroboi
              </Text>
            </View>
            <Text
              style={[
                {
                  fontSize: 14,
                  lineHeight: 20,
                  color: colors.grey,
                  fontFamily: "Chirp_Regular",
                },
              ]}
            >
              30m
            </Text>
          </View>
          <Text
            style={[
              {
                marginBottom: 10,
                fontFamily: "Chirp_Regular",
                color: colors.black,
                fontSize: 14,
                lineHeight: 20,
              },
            ]}
          >
            by The people of northern Ghana Serving temperature mostly hot Main
            ingredients beans and rice Media: Waakye Waakye (/ˈwɑːtʃeɪ/
            WAH-chay)[2] is a Ghanaian dish of cooked rice and beans, commonly
            eaten for breakfast or lunch.[3]
          </Text>
          <Gallery />
        </View>
      </View>
      <View style={[castListItemStyles.flexRow]}>
        <View style={[castListItemStyles.flexRow, { flex: 1 }]}>
          <Feather name="message-circle" size={20} color={colors.grey} />
          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            46
          </Text>
          <AntDesign
            name="retweet"
            size={20}
            color={colors.grey}
            style={[{ marginLeft: 10 }]}
          />
          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            20
          </Text>
          <AntDesign
            name="hearto"
            size={20}
            color={colors.grey}
            style={[{ marginLeft: 10 }]}
          />
          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            15
          </Text>
        </View>
        <View style={[castListItemStyles.flexRow, { flexShrink: 0 }]}>
          <Text style={[castListItemStyles.lightSubText, { marginRight: 5 }]}>
            10:18 PM
          </Text>

          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            Dec 4, 2023
          </Text>
        </View>
      </View>
    </View>
  );
}
export function ReplyListItem() {
  return (
    <TouchableOpacity style={[castListItemStyles.itemContainer]}>
      <View style={[castListItemStyles.splitArticle]}>
        <View
          style={[
            {
              width: 36,
              marginRight: 10,
              height: "100%",
              alignItems: "center",
            },
          ]}
        >
          <Image
            style={[castListItemStyles.avatar]}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <View style={[{ flex: 1 }]}>
          <View
            style={[
              castListItemStyles.flexRow,
              { marginBottom: 5, alignItems: "flex-start" },
            ]}
          >
            <View style={[{ flex: 1 }]}>
              <Text
                style={[
                  {
                    fontFamily: "Chirp_Bold",
                    fontSize: 16,
                    lineHeight: 24,
                    color: colors.black,
                  },
                ]}
              >
                Macrocephalopod
              </Text>
              <Text
                style={[
                  {
                    fontSize: 14,
                    lineHeight: 20,
                    color: colors.grey,
                    fontFamily: "Chirp_Regular",
                  },
                ]}
              >
                @macroboi
              </Text>
            </View>
            <Text
              style={[
                {
                  fontSize: 14,
                  lineHeight: 20,
                  color: colors.grey,
                  fontFamily: "Chirp_Regular",
                },
              ]}
            >
              30m
            </Text>
          </View>
          <Text
            style={[
              {
                marginBottom: 10,
                fontFamily: "Chirp_Regular",
                color: colors.black,
                fontSize: 14,
                lineHeight: 20,
              },
            ]}
          >
            by The people of northern Ghana Serving temperature mostly hot Main
            ingredients beans and rice Media: Waakye Waakye (/ˈwɑːtʃeɪ/
            WAH-chay)[2] is a Ghanaian dish of cooked rice and beans, commonly
            eaten for breakfast or lunch
          </Text>
          <View style={[castListItemStyles.flexRow, { flex: 1 }]}>
            <Feather name="message-circle" size={20} color={colors.grey} />
            <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
              46
            </Text>
            <AntDesign
              name="retweet"
              size={20}
              color={colors.grey}
              style={[{ marginLeft: 10 }]}
            />
            <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
              20
            </Text>
            <AntDesign
              name="hearto"
              size={20}
              color={colors.grey}
              style={[{ marginLeft: 10 }]}
            />
            <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
              15
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export function Gallery(): JSX.Element {
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
      <ImageBackground
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
        style={[castListItemStyles.galleryItem, { marginRight: 10 }]}
      />
      <ImageBackground
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
        style={[castListItemStyles.galleryItem]}
      />
      <ImageBackground
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
        style={[castListItemStyles.galleryItem]}
      />
      {/* <ImageBackground
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
        style={[castListItemStyles.galleryItem]}
      /> */}
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
    minHeight: 120,
    flex: 1,
    objectFit: "cover",
    overflow: "hidden",
    marginBottom: 10,
  },
});
