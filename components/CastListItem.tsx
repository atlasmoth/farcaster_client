import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { colors } from "./../utils/sharedStyles";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Cast } from "./castTypes";
import { formatDistance } from "date-fns";
import { memo } from "react";

export const blurhash = "L5KUl|IA0Kay~WWBWVj]00ayaeWC";

function NoMemoCastListItem({ data }: { data: Cast }) {
  const navigation = useNavigation() as unknown as any;

  return (
    <TouchableOpacity
      style={[castListItemStyles.itemContainer]}
      onPress={() => {
        navigation.navigate("Cast 🔊", data);
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
            source={data.author?.pfp_url}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
          {data.mentioned_profiles?.length > 0 ? (
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
          ) : (
            <></>
          )}
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
                {data?.author?.display_name}
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
                @{data?.author?.username}
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
              {formatDistance(new Date(data.timestamp), new Date(), {
                addSuffix: true,
              })}
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
                fontWeight: "500",
              },
            ]}
          >
            {/* {data.text} */}
            {data.text
              .replaceAll("\n", " ")
              .split(" ")
              .map((t, index) => {
                if (
                  (t.length > 0 && t.startsWith("@")) ||
                  t.startsWith("http")
                ) {
                  return (
                    <Text
                      onPress={() => {
                        Linking.openURL(
                          t.startsWith("@")
                            ? `https://warpcast.com/${t.slice(1)}`
                            : t
                        ).catch(console.log);
                      }}
                      key={index}
                      style={[
                        {
                          color: "#0D78F2",
                          fontWeight: "600",
                        },
                      ]}
                    >
                      {t}{" "}
                    </Text>
                  );
                }

                return <Text key={index}>{t} </Text>;
              })}
          </Text>
          <Gallery
            urls={(data.embeds || []).filter((d) => {
              const lowerCaseUrl = d?.url?.toLowerCase()?.trim() || "";

              let urlBool = false;
              urlBool = lowerCaseUrl.endsWith("png");
              if (!urlBool) {
                urlBool = lowerCaseUrl.endsWith("jpg");
              }
              if (!urlBool) {
                urlBool = lowerCaseUrl.endsWith("jpeg");
              }
              if (!urlBool) {
                urlBool = lowerCaseUrl.endsWith("svg");
              }
              return urlBool;
            })}
          />
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
          {data.mentioned_profiles?.length > 0 &&
            data.mentioned_profiles[0] && (
              <Image
                style={[castListItemStyles.thumbnail]}
                source={data.mentioned_profiles[0]?.pfp_url}
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
            )}
          {data.mentioned_profiles?.length > 1 &&
            data.mentioned_profiles[1] && (
              <Image
                style={[
                  castListItemStyles.thumbnail,
                  castListItemStyles.secondThumbnail,
                ]}
                source={data.mentioned_profiles[1]?.pfp_url}
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
            )}
        </View>
        <Feather name="message-circle" size={20} color={colors.grey} />
        <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
          {data.replies?.count}
        </Text>
        <AntDesign
          name="retweet"
          size={20}
          color={colors.grey}
          style={[{ marginLeft: 10 }]}
        />
        <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
          {data.reactions?.recasts?.length}
        </Text>
        <AntDesign
          name="hearto"
          size={20}
          color={colors.grey}
          style={[{ marginLeft: 10 }]}
        />
        <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
          {data.reactions?.likes?.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function NoMemoMainListItem({ data }: { data: Cast }) {
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
                source={data.author?.pfp_url}
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
                {data.author.display_name}
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
                @{data.author.username}
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
              {formatDistance(
                new Date(data.timestamp || new Date()),
                new Date(),
                {
                  addSuffix: true,
                }
              )}
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
                justifyContent: "center",
              },
            ]}
          >
            {/* {data.text} */}
            {data.text
              .replaceAll("\n", " ")
              .split(" ")
              .map((t, index) => {
                if (
                  (t.length > 0 && t.startsWith("@")) ||
                  t.startsWith("http")
                ) {
                  return (
                    <Text
                      onPress={() => {
                        Linking.openURL(
                          t.startsWith("@")
                            ? `https://warpcast.com/${t.slice(1)}`
                            : t
                        ).catch(console.log);
                      }}
                      key={index}
                      style={[
                        {
                          color: "#0D78F2",
                          fontWeight: "600",
                        },
                      ]}
                    >
                      {t}{" "}
                    </Text>
                  );
                }

                return <Text key={index}>{t} </Text>;
              })}
          </Text>
          <Gallery
            urls={data.embeds.filter((d) => {
              const lowerCaseUrl = d?.url?.toLowerCase()?.trim() || "";

              let urlBool = false;
              urlBool = lowerCaseUrl.endsWith("png");
              if (!urlBool) {
                urlBool = lowerCaseUrl.endsWith("jpg");
              }
              if (!urlBool) {
                urlBool = lowerCaseUrl.endsWith("jpeg");
              }
              if (!urlBool) {
                urlBool = lowerCaseUrl.endsWith("svg");
              }
              return urlBool;
            })}
          />
        </View>
      </View>
      <View style={[castListItemStyles.flexRow]}>
        <View style={[castListItemStyles.flexRow, { flex: 1 }]}>
          <Feather name="message-circle" size={20} color={colors.grey} />
          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            {data.replies.count}
          </Text>
          <AntDesign
            name="retweet"
            size={20}
            color={colors.grey}
            style={[{ marginLeft: 10 }]}
          />
          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            {data.reactions.likes.length}
          </Text>
          <AntDesign
            name="hearto"
            size={20}
            color={colors.grey}
            style={[{ marginLeft: 10 }]}
          />
          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            {data.reactions.recasts.length}
          </Text>
        </View>
        <View style={[castListItemStyles.flexRow, { flexShrink: 0 }]}>
          <Text style={[castListItemStyles.lightSubText, { marginRight: 5 }]}>
            {new Intl.DateTimeFormat("en-NG", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(data.timestamp))}
          </Text>

          <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
            {new Intl.DateTimeFormat("en-NG", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }).format(new Date(data.timestamp))}
          </Text>
        </View>
      </View>
    </View>
  );
}
function NoMemoReplyListItem({ data }: { data: Record<any, any> }) {
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
            source={data.author.pfp.url}
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
                {data.author.displayName}
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
                @{data.author.username}
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
              {formatDistance(
                new Date(data.timestamp || new Date()),
                new Date(),
                {
                  addSuffix: true,
                }
              )}
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
            {/* {data.text} */}
            {data.text
              .replaceAll("\n", " ")
              .split(" ")
              .map((t, index) => {
                if (
                  (t.length > 0 && t.startsWith("@")) ||
                  t.startsWith("http")
                ) {
                  return (
                    <Text
                      onPress={() => {
                        Linking.openURL(
                          t.startsWith("@")
                            ? `https://warpcast.com/${t.slice(1)}`
                            : t
                        ).catch(console.log);
                      }}
                      key={index}
                      style={[
                        {
                          color: "#0D78F2",
                          fontWeight: "600",
                        },
                      ]}
                    >
                      {t}{" "}
                    </Text>
                  );
                }

                return <Text key={index}>{t} </Text>;
              })}
          </Text>
          <Gallery
            urls={
              data.embeds ||
              [].filter((d) => {
                const lowerCaseUrl = d?.url?.toLowerCase()?.trim() || "";

                let urlBool = false;
                urlBool = lowerCaseUrl.endsWith("png");
                if (!urlBool) {
                  urlBool = lowerCaseUrl.endsWith("jpg");
                }
                if (!urlBool) {
                  urlBool = lowerCaseUrl.endsWith("jpeg");
                }
                if (!urlBool) {
                  urlBool = lowerCaseUrl.endsWith("svg");
                }
                return urlBool;
              })
            }
          />
          <View style={[castListItemStyles.flexRow, { flex: 1 }]}>
            <Feather name="message-circle" size={20} color={colors.grey} />
            <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
              {data.replies.count}
            </Text>
            <AntDesign
              name="retweet"
              size={20}
              color={colors.grey}
              style={[{ marginLeft: 10 }]}
            />
            <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
              {data.recasts.count}
            </Text>
            <AntDesign
              name="hearto"
              size={20}
              color={colors.grey}
              style={[{ marginLeft: 10 }]}
            />
            <Text style={[castListItemStyles.lightSubText, { marginLeft: 3 }]}>
              {data.reactions.count}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export function Gallery({ urls }: { urls: any[] }): JSX.Element {
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
          <Image
            style={[
              castListItemStyles.galleryItem,
              index % 2 === 0 && arr[index + 1] ? { marginRight: 10 } : {},
            ]}
            source={{ uri: url.url }}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            key={url + index}
          />
        );
      })}
    </View>
  );
}

export const MainListItem = memo(NoMemoMainListItem);
export const ReplyListItem = memo(NoMemoReplyListItem);

export const CastListItem = memo(NoMemoCastListItem);

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
