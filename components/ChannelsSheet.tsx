import { memo, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import ActionSheet, {
  SheetProps,
  useScrollHandlers,
  ActionSheetRef,
} from "react-native-actions-sheet";
import { colors } from "../utils/sharedStyles";
import { Image } from "expo-image";
import { blurhash } from "./CastListItem";
import { Feather } from "@expo/vector-icons";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); //Ignore all log notifications, be sure to undo this later to fix issue

function SearchItem({ item }: { item: any }) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[
        {
          flexDirection: "column",
          alignItems: "center",
          paddingVertical: 12,
          marginTop: 10,
          borderColor: colors.grey,
          borderWidth: 0.3,
          borderRadius: 12,
          paddingHorizontal: 12,

          flexShrink: 0,
          justifyContent: "center",
          minWidth: "31%",
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
      <View style={[{ flex: 1, marginLeft: 10 }]}>
        <View style={[{}]}>
          <View style={[{ flex: 1, marginBottom: 5 }]}>
            <Text
              style={[
                {
                  color: colors.bgWhite,
                  fontFamily: "Chirp_Bold",
                  fontSize: 15,
                  lineHeight: 20,
                  fontWeight: "700",
                  flex: 1,
                  textAlign: "center",
                },
              ]}
            >
              Channel
            </Text>
            <Text
              style={[
                {
                  fontSize: 12,
                  lineHeight: 18,
                  color: colors.grey,
                  fontFamily: "Chirp_Bold",
                  textAlign: "center",
                },
              ]}
            >
              10.4k
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const MemoizedSearchItem = memo(SearchItem);

export default function ChannelsSheet(
  props: SheetProps<{
    remove: () => void;
    edit: () => void;
  }>
) {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const scrollHandlers = useScrollHandlers<FlatList>(
    "scrollview-1",
    actionSheetRef
  );
  const [tokens] = useState([
    {
      symbol: "😺",
      address: "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
      baseURI: "https://api.mooncat.community/traits/",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/Ldtf7vSUTOUntndwt4vElnnPx1ydoBWgku9niynaPOIHXG4mvy4ZyeI1EX3Y+NkV/small.gif",
      },
      name: "Acclimated​MoonCats",
    },
    {
      id: "a63acc2464d7245aa3586afd50a8e615373dba7cdb8945b766b3a9baeed53a16",
      eventId: "169358",
      poapEvent: {
        eventName: "Super Early Birds",
        eventURL: "https://genlayer.com",
        startDate: "2024-02-29T00:00:00Z",
        endDate: "2024-03-02T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/inHnoarQkmYNshFb5urbIg==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/inHnoarQkmYNshFb5urbIg==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/inHnoarQkmYNshFb5urbIg==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/inHnoarQkmYNshFb5urbIg==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/inHnoarQkmYNshFb5urbIg==/small.png",
          },
        },
      },
      owner: {
        identity: "0x5ee08241d5178e8b270324ccef5c0b390e282592",
        primaryDomain: null,
        addresses: ["0x5ee08241d5178e8b270324ccef5c0b390e282592"],
      },
    },
    {
      id: "64111ef8f996675f0b007b77d3acdaa6a8dab30c4978c8b28b484714469a7f8c",
      eventId: "23005",
      poapEvent: {
        eventName: "The oldest living organism on Earth",
        eventURL: "http://nature.makerdao.com",
        startDate: "2022-01-12T00:00:00Z",
        endDate: "2022-01-12T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/Krv/W97BXDWP9a4rUNOcKQ==/extra_small.gif",
            large:
              "https://assets.airstack.xyz/image/poap/Krv/W97BXDWP9a4rUNOcKQ==/large.gif",
            medium:
              "https://assets.airstack.xyz/image/poap/Krv/W97BXDWP9a4rUNOcKQ==/medium.gif",
            original:
              "https://assets.airstack.xyz/image/poap/Krv/W97BXDWP9a4rUNOcKQ==/original_image.gif",
            small:
              "https://assets.airstack.xyz/image/poap/Krv/W97BXDWP9a4rUNOcKQ==/small.gif",
          },
        },
      },
      owner: {
        identity: "0x584254e7a8eefa9e31ac0086f27363c4441b5f7c",
        primaryDomain: null,
        addresses: ["0x584254e7a8eefa9e31ac0086f27363c4441b5f7c"],
      },
    },
    {
      symbol: "🟪️✅",
      address: "0xf74723db57722b7b1e1a8841a93c3f17876b0b12",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xf74723db57722b7b1e1a8841a93c3f17876b0b12",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/v8kBTkHwl4rxVabRdnlUeGOrnWPqYkaZCaKsSg3qve0ejAaHT8pFc3TNkdPFFdxT/small.png",
      },
      name: "Purplecheck",
    },
    {
      id: "ec0691a27666fc96be6454df03abcaaf09e30dd3e26b6f6e286bdf9e1ca04a32",
      eventId: "169827",
      poapEvent: {
        eventName: "OnionDAO - Tor Node Operator February 2024",
        eventURL: "https://oniondao.web.app/",
        startDate: "2024-02-29T00:00:00Z",
        endDate: "2024-02-29T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/a0VMfA4K82+5nvOudjlGdg==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/a0VMfA4K82+5nvOudjlGdg==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/a0VMfA4K82+5nvOudjlGdg==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/a0VMfA4K82+5nvOudjlGdg==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/a0VMfA4K82+5nvOudjlGdg==/small.png",
          },
        },
      },
      owner: {
        identity: "0xf9e1d1e9f22c96752356adfd377231528c7e851e",
        primaryDomain: {
          name: "hartel.eth",
        },
        addresses: ["0xf9e1d1e9f22c96752356adfd377231528c7e851e"],
      },
    },
    {
      symbol: "𝕌ℝ𝔹𝔸ℕℝ𝕆𝕆𝕋𝕊",
      address: "0x12493116becb7bce244de2eb8496410cbf45338f",
      baseURI: "ipfs://QmWggEmUceVMoVT9c2MvrBwaab8YHz7pL5xr2rNGMn3WFq/",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10x12493116becb7bce244de2eb8496410cbf45338f",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/GJpxl9Z0OSy68pxg8i1IT6IUqqqmU+VmMk+AtstQGB7/FE/XUGRXfQpH3o7JBlmp/small",
      },
      name: "𝕌ℝ𝔹𝔸ℕ ℝ𝕆𝕆𝕋𝕊",
    },
    {
      symbol: "𝔡𝔢𝔣𝔞𝔠𝔢𝔡",
      address: "0xbc83e2f1315082be3abd0f7c3fba47d1534c92af",
      baseURI: "https://api.niftygateway.com/defaced/",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xbc83e2f1315082be3abd0f7c3fba47d1534c92af",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/7foelo+WLVstyFQfDyd2ZF4X6MhaogOTk3Oyr2Q4rAW+G9eXagfva9/MxFvpglaf/small.png",
      },
      name: "𝔡𝔢𝔣𝔞𝔠𝔢𝔡",
    },
    {
      symbol: "🚫",
      address: "0xfd5b9b4bee5de4956ec67ddbea0618939b54ead6",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xfd5b9b4bee5de4956ec67ddbea0618939b54ead6",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/GT//yufLtiYKgUmo6XNrSUoHs5oE4frWAs7aV1zh5NP5axMpSYAOM97nv5WxIs8p/small.png",
      },
      name: "BANNFT",
    },
    {
      symbol: "🎨",
      address: "0xc02697c417ddacfbe5edbf23edad956bc883f4fb",
      baseURI: "ipfs://ipfs/",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xc02697c417ddacfbe5edbf23edad956bc883f4fb",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/MEgpYfUeAbmI+rSUDQkihjxmlmg5zjuCb2+WktdseBRrOcdX5g/Qv8A5ZJOYFv90/small.png",
      },
      name: "🎨 Nifty.Ink",
    },
    {
      id: "455997e68c01a6fcdb5fd259c2d7c7bb5087e72371e8394688ebea3e64a74483",
      eventId: "169825",
      poapEvent: {
        eventName: "Linus Pauling Day, February 28, 2024",
        eventURL: "https://twitter.com/yeysus",
        startDate: "2024-02-28T00:00:00Z",
        endDate: "2024-02-28T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/BnKkpaJjiCRfyFp9z7FcwA==/extra_small.gif",
            large:
              "https://assets.airstack.xyz/image/poap/BnKkpaJjiCRfyFp9z7FcwA==/large.gif",
            medium:
              "https://assets.airstack.xyz/image/poap/BnKkpaJjiCRfyFp9z7FcwA==/medium.gif",
            original:
              "https://assets.airstack.xyz/image/poap/BnKkpaJjiCRfyFp9z7FcwA==/original_image.gif",
            small:
              "https://assets.airstack.xyz/image/poap/BnKkpaJjiCRfyFp9z7FcwA==/small.gif",
          },
        },
      },
      owner: {
        identity: "0x97c6e87f957904bc81ed8bb0d14e67c991791c01",
        primaryDomain: null,
        addresses: ["0x97c6e87f957904bc81ed8bb0d14e67c991791c01"],
      },
    },
    {
      id: "e9f890c26f94462bcc2f1006a416d52333ac3cfb0d0b30cc48459e040ec8482c",
      eventId: "170231",
      poapEvent: {
        eventName: "From our minds - Test Drop",
        eventURL: "https://poap.xyz",
        startDate: "2024-03-01T00:00:00Z",
        endDate: "2024-03-31T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/zeti8WW3Odm2IxhK7N3gZA==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/zeti8WW3Odm2IxhK7N3gZA==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/zeti8WW3Odm2IxhK7N3gZA==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/zeti8WW3Odm2IxhK7N3gZA==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/zeti8WW3Odm2IxhK7N3gZA==/small.png",
          },
        },
      },
      owner: {
        identity: "0x4ae3074355d87f77903dc2da17ef348a4c976e91",
        primaryDomain: null,
        addresses: ["0x4ae3074355d87f77903dc2da17ef348a4c976e91"],
      },
    },
    {
      id: "fbf85b866b6e296b217b8efec885e3b5e00821fbd3fadd2345c8fc4ae0565ab3",
      eventId: "166421",
      poapEvent: {
        eventName: "GitPOAP: 2024 Ethereum.org Contributor",
        eventURL: "https://github.com/ethereum/ethereum-org-website",
        startDate: "2023-12-30T00:00:00Z",
        endDate: "2024-12-30T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/TFCQk6WOCFWVduQAlZo3dA==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/TFCQk6WOCFWVduQAlZo3dA==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/TFCQk6WOCFWVduQAlZo3dA==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/TFCQk6WOCFWVduQAlZo3dA==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/TFCQk6WOCFWVduQAlZo3dA==/small.png",
          },
        },
      },
      owner: {
        identity: "0x3dcd64ae5afe6efc8fa99043bcb13676a8b6eb08",
        primaryDomain: null,
        addresses: ["0x3dcd64ae5afe6efc8fa99043bcb13676a8b6eb08"],
      },
    },
    {
      symbol: "👻🎃🧙",
      address: "0xe265c190663053af2949618769cae9c3dc21d541",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xe265c190663053af2949618769cae9c3dc21d541",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/ouEmbPKsjYRoQvku+TpC25EKBGf/0Lm88T7kGdbaaS9t0txdEN4WrFLrp2TmpBX//small.jpg",
      },
      name: "Gossip Ghoul",
    },
    {
      symbol: "🍃 Crypto",
      address: "0x17655c98ad50da1585d5dec54b6398aa6e9635d3",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10x17655c98ad50da1585d5dec54b6398aa6e9635d3",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/onwS6IdGcShlRRXxjGISHZ0V7qvTocRKqY/NAk3D5FGWfvP0Mk2zpSnDiRL8y/z2/small.png",
      },
      name: "🍃 Crypto",
    },
    {
      id: "1e36d5ddca49067f66f67171ba60d74dd2fa9d68aa6e0a9f4a1da8592ee156f8",
      eventId: "170243",
      poapEvent: {
        eventName:
          "Dosis WEB3 Temp3 Ep5 - Happ3n: Construyendo puentes entre creadores, comunidades y web3",
        eventURL: "",
        startDate: "2024-03-05T00:00:00Z",
        endDate: "2024-03-06T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/41Q4yhFMxeC0WiUbxtiNCQ==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/41Q4yhFMxeC0WiUbxtiNCQ==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/41Q4yhFMxeC0WiUbxtiNCQ==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/41Q4yhFMxeC0WiUbxtiNCQ==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/41Q4yhFMxeC0WiUbxtiNCQ==/small.png",
          },
        },
      },
      owner: {
        identity: "0x84a12185c28381adc6d55d245c617173f10a2ec8",
        primaryDomain: null,
        addresses: ["0x84a12185c28381adc6d55d245c617173f10a2ec8"],
      },
    },
    {
      symbol: "🐸 Toad’n 🐸",
      address: "0x98d5c49c74b59e9b007056f6e61c9a9675ebd7f4",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10x98d5c49c74b59e9b007056f6e61c9a9675ebd7f4",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/qUdC+tKSxpsk90ax33piZCGSfbO00faa7n+Zs5V2DgIj0XSJ8UhJQ0/VO0YgD7TO/small.png",
      },
      name: "🐸 Toad’n 🐸",
    },
    {
      id: "14456d9e454d817a411c4cedfc1d71ef1cc9396bccc164143c3ad656de672275",
      eventId: "169385",
      poapEvent: {
        eventName: "BBA Forum March",
        eventURL: "https://britishblockchainassociation.org/",
        startDate: "2024-03-06T00:00:00Z",
        endDate: "2024-03-06T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap//inJDouG1aQvg6d1XPq/3Q==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap//inJDouG1aQvg6d1XPq/3Q==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap//inJDouG1aQvg6d1XPq/3Q==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap//inJDouG1aQvg6d1XPq/3Q==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap//inJDouG1aQvg6d1XPq/3Q==/small.png",
          },
        },
      },
      owner: {
        identity: "0x0f8bc9a2cc67f72d9941fb6d7b59d88925b720eb",
        primaryDomain: null,
        addresses: ["0x0f8bc9a2cc67f72d9941fb6d7b59d88925b720eb"],
      },
    },
    {
      id: "9223fdd0bfe8b908b184efd191933c4085431b36d476c508f72b9c0f7e19c129",
      eventId: "168359",
      poapEvent: {
        eventName: "NFT Paris 2024",
        eventURL: "https://www.nftparis.xyz",
        startDate: "2024-02-23T00:00:00Z",
        endDate: "2024-02-24T00:00:00Z",
        country: "France",
        city: "Paris",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/G97RbS7KswyE/4IpTwVYwg==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/G97RbS7KswyE/4IpTwVYwg==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/G97RbS7KswyE/4IpTwVYwg==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/G97RbS7KswyE/4IpTwVYwg==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/G97RbS7KswyE/4IpTwVYwg==/small.png",
          },
        },
      },
      owner: {
        identity: "0x950957e709debd3fc25f060e7d0a98338c40e27a",
        primaryDomain: null,
        addresses: ["0x950957e709debd3fc25f060e7d0a98338c40e27a"],
      },
    },
    {
      symbol: "🤗",
      address: "0xa2c07192371f680f4124ed9c09c7272f27172026",
      baseURI:
        "ipfs://bafyreia7cfpq23wwwzlgje65777lhrx5lyag53fabt6qbx6xahpfftctne/metadata.json?",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xa2c07192371f680f4124ed9c09c7272f27172026",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/opSfO5Nb5UNQO5FYTy9g6VsfS2yy4SwgpQTt4m41OCWWxwre/C/OsuMkUcMYGeCH/small.png",
      },
      name: "Arama Genesis OE - Feel So Close",
    },
    {
      symbol: "👑",
      address: "0x5d44a07b4780f74daf88268586217dc70bf3f121",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10x5d44a07b4780f74daf88268586217dc70bf3f121",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/U/k9Gz8Q0QgstJ2kSEup8pjrbaLGykrUdtnt3RgPehyGpniRa8B74Fm8KWkvdOay/small.jpg",
      },
      name: "❤️‍🔥 🔱 🐉 Matyrael 🌎 🌺 ",
    },
    {
      symbol: "🌷",
      address: "0xd5fbd81cef9aba7464c5f17e529444918a8ecc57",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xd5fbd81cef9aba7464c5f17e529444918a8ecc57",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/iI5ndg0KNpFLACtsPNLmHe4wDSYRDQ0Giae7B+JMgFWTj9Br9pALT+9Y/43Uo3lI/small.png",
      },
      name: "EtherTulip",
    },
    {
      id: "cb5677f72435953f2eff8a1a5fbc56b19f3ebacaeafa04c5f762403708210f65",
      eventId: "136201",
      poapEvent: {
        eventName: "Epoch Zero Whitelist",
        eventURL: "https://octant.build",
        startDate: "2023-06-29T00:00:00Z",
        endDate: "2023-07-21T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/6qvc5bE+S48SF1lE/atyaw==/extra_small.aaf",
            large:
              "https://assets.airstack.xyz/image/poap/6qvc5bE+S48SF1lE/atyaw==/large.aaf",
            medium:
              "https://assets.airstack.xyz/image/poap/6qvc5bE+S48SF1lE/atyaw==/medium.aaf",
            original:
              "https://assets.airstack.xyz/image/poap/6qvc5bE+S48SF1lE/atyaw==/original_image.aaf",
            small:
              "https://assets.airstack.xyz/image/poap/6qvc5bE+S48SF1lE/atyaw==/small.aaf",
          },
        },
      },
      owner: {
        identity: "0x78362090cd0678ea2742ee8eb7f5c9482597da7b",
        primaryDomain: {
          name: "dabdab.eth",
        },
        addresses: ["0x78362090cd0678ea2742ee8eb7f5c9482597da7b"],
      },
    },
    {
      id: "37cb0ddb97ebbdb39293c5c36d5f563127e8bfc9780db1f7bf8b07351d9ea22c",
      eventId: "143084",
      poapEvent: {
        eventName: "CoinGecko Premium Badge v3",
        eventURL: "https://www.coingecko.com/en/premium/pricing",
        startDate: "2023-11-13T00:00:00Z",
        endDate: "2024-11-13T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/SL1fxp7+8f7vmvjrI0R51A==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/SL1fxp7+8f7vmvjrI0R51A==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/SL1fxp7+8f7vmvjrI0R51A==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/SL1fxp7+8f7vmvjrI0R51A==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/SL1fxp7+8f7vmvjrI0R51A==/small.png",
          },
        },
      },
      owner: {
        identity: "0xa850d943880c73d0e01f7666599bfda2a26d8d8d",
        primaryDomain: null,
        addresses: ["0xa850d943880c73d0e01f7666599bfda2a26d8d8d"],
      },
    },
    {
      id: "38a39a13a604925c88c72afbd7ddbdf23b8a311dd9859853ee26d3bf352c09f0",
      eventId: "169210",
      poapEvent: {
        eventName: "Integral ETHDenver 2024",
        eventURL: "https://integral.xyz/ethdenver",
        startDate: "2024-02-26T00:00:00Z",
        endDate: "2024-03-10T00:00:00Z",
        country: "USA",
        city: "Denver",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/5I7nlL3PJIvelSA3dkYimw==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/5I7nlL3PJIvelSA3dkYimw==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/5I7nlL3PJIvelSA3dkYimw==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/5I7nlL3PJIvelSA3dkYimw==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/5I7nlL3PJIvelSA3dkYimw==/small.png",
          },
        },
      },
      owner: {
        identity: "0x521f59f00c3fb1ae3bffd4969daae95754f82ef8",
        primaryDomain: null,
        addresses: ["0x521f59f00c3fb1ae3bffd4969daae95754f82ef8"],
      },
    },
    {
      symbol: "🎊",
      address: "0x71d870a0ab98d2d012a5579642dcbbf447607781",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10x71d870a0ab98d2d012a5579642dcbbf447607781",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/Jl2bI3UZGD1uEKjZNbHjkDRkX2mcUxXrPcbF/lrfZjyVNX6j8ZAmams1Fe10r9cn/small.png",
      },
      name: "ghoulBalls",
    },
    {
      id: "58948ce67d6ba5e6055412dcad640146beca5b7cec2d59afe0139308f66dd8d7",
      eventId: "166611",
      poapEvent: {
        eventName: "Games night Jan - Feb 24'",
        eventURL: "https://www.monad.xyz/",
        startDate: "2024-01-01T00:00:00Z",
        endDate: "2024-02-29T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/D49Zb4onx+2T7r3Z+wchTQ==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/D49Zb4onx+2T7r3Z+wchTQ==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/D49Zb4onx+2T7r3Z+wchTQ==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/D49Zb4onx+2T7r3Z+wchTQ==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/D49Zb4onx+2T7r3Z+wchTQ==/small.png",
          },
        },
      },
      owner: {
        identity: "0x757d866eeeb4d108fa1cde192c595ca96a1ffeb9",
        primaryDomain: null,
        addresses: ["0x757d866eeeb4d108fa1cde192c595ca96a1ffeb9"],
      },
    },
    {
      id: "c0f9adb1538c157a7dfdb12fe9374ddd27fc913ec4a3668558c2bc1117da571b",
      eventId: "167758",
      poapEvent: {
        eventName: "You met Ramana at ETHDenver 2024",
        eventURL: "https://xrchz.net",
        startDate: "2024-02-29T00:00:00Z",
        endDate: "2024-03-08T00:00:00Z",
        country: "United States",
        city: "Denver, Colorado",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/qo7NZ+hZY/2iTN4PuFQmyw==/extra_small.gif",
            large:
              "https://assets.airstack.xyz/image/poap/qo7NZ+hZY/2iTN4PuFQmyw==/large.gif",
            medium:
              "https://assets.airstack.xyz/image/poap/qo7NZ+hZY/2iTN4PuFQmyw==/medium.gif",
            original:
              "https://assets.airstack.xyz/image/poap/qo7NZ+hZY/2iTN4PuFQmyw==/original_image.gif",
            small:
              "https://assets.airstack.xyz/image/poap/qo7NZ+hZY/2iTN4PuFQmyw==/small.gif",
          },
        },
      },
      owner: {
        identity: "0x65fe89a480bdb998f4116daf2a9360632554092c",
        primaryDomain: {
          name: "ramana.eth",
        },
        addresses: ["0x65fe89a480bdb998f4116daf2a9360632554092c"],
      },
    },
    {
      symbol: "🌼",
      address: "0x852a30069eaa222210e303669f01ffcc16702f00",
      baseURI:
        "ipfs://bafyreihv6mlxd44qcuxc2mbfzg5lo7nqtvxmj73h2glyjwyi7rp2vayuqe/metadata.json?",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10x852a30069eaa222210e303669f01ffcc16702f00",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/AP6spYmHLjKkUwk4+scFFc1N0wYRyUzMAesOKIFv0dfPVtHMomRQDctIFCvkjVqE/small.png",
      },
      name: "Garden",
    },
    {
      symbol: "💪🏻🐦 ",
      address: "0xceb09ff6f6c6586bfa094c402f1d5bfa37d06c43",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xceb09ff6f6c6586bfa094c402f1d5bfa37d06c43",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/dwQwladTQiSYxGDlhYh0IfQvvZOk6Depe37Hf3rAsN7VnslBB4FI8YtYlD1T8PU6/small.gif",
      },
      name: "Ripped Birds ",
    },
    {
      id: "2acf7ab41f44317c7343a7dfad59fdbde182fbe73af0011990fdfbb2fa3dea4a",
      eventId: "56642",
      poapEvent: {
        eventName: "GitPOAP: 2021 Rocket Pool Contributor",
        eventURL: "https://github.com/rocket-pool/rocketpool",
        startDate: "2022-01-01T00:00:00Z",
        endDate: "2022-12-31T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/pxo1GUGFZPiYw9iEkkY7KQ==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/pxo1GUGFZPiYw9iEkkY7KQ==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/pxo1GUGFZPiYw9iEkkY7KQ==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/pxo1GUGFZPiYw9iEkkY7KQ==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/pxo1GUGFZPiYw9iEkkY7KQ==/small.png",
          },
        },
      },
      owner: {
        identity: "0x4151882470bff257e912d1e5ca9951d42b176e57",
        primaryDomain: {
          name: "arnoud.eth",
        },
        addresses: ["0x4151882470bff257e912d1e5ca9951d42b176e57"],
      },
    },
    {
      symbol: "🎨💻",
      address: "0x6aec4839b5df0483cd19383a72ef54f00e81d65c",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10x6aec4839b5df0483cd19383a72ef54f00e81d65c",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/4d3m7ZzNK0+WjLppOqMXvlcfIJ6jmaaaFou022I1DVhxx6Ini5aAtH5jnqosZR7B/small.png",
      },
      name: "Pixfinder",
    },
    {
      id: "c4b084214f7f9e781f78c190fefeed1f213cf976a9a379238122f0ec41605b51",
      eventId: "170272",
      poapEvent: {
        eventName: "Matthew is great.",
        eventURL: "https://wid3.xyz",
        startDate: "2024-03-05T00:00:00Z",
        endDate: "2024-03-06T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/E4A0PGOKZC18jQZhQSMMTQ==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/E4A0PGOKZC18jQZhQSMMTQ==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/E4A0PGOKZC18jQZhQSMMTQ==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/E4A0PGOKZC18jQZhQSMMTQ==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/E4A0PGOKZC18jQZhQSMMTQ==/small.png",
          },
        },
      },
      owner: {
        identity: "0x4e3a5626654b38a612eb10ce549da220797db2ac",
        primaryDomain: null,
        addresses: ["0x4e3a5626654b38a612eb10ce549da220797db2ac"],
      },
    },
    {
      symbol: "🤬",
      address: "0xae03fae2a53b5ab3797faf3e8d6af8cde4594e2a",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xae03fae2a53b5ab3797faf3e8d6af8cde4594e2a",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/pJGLm4IVKszvN6JHwbBMhBjKtrOV0KO0oOsZCML4YTjNktWdGd7levpnk6r/VBce/small.jpg",
      },
      name: "Bishop's Tattoo Lots",
    },
    {
      symbol: "🐯🐯🐯",
      address: "0xc758b859cd947f4e9557cc9f46cf490bc097053a",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xc758b859cd947f4e9557cc9f46cf490bc097053a",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/fffvcn/C9SlXUokixvXdI9ZUqdfxPczc46GmhCPYvzIVW+4bAY64zO1ebTlRFCKK/small.png",
      },
      name: "TigerTrig Pt2",
    },
    {
      id: "e0a2288d79ce04274472f7f80df0705ea3b2c496b38c5e90dc6156339813e323",
      eventId: "69632",
      poapEvent: {
        eventName: "Mainnet Merge POAP.art Canvas Pixel Placer",
        eventURL: "https://app.poap.art/mainnet-merge",
        startDate: "2022-09-27T00:00:00Z",
        endDate: "2022-09-27T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap//TIEaw78QPiNPQb8dtO30w==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap//TIEaw78QPiNPQb8dtO30w==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap//TIEaw78QPiNPQb8dtO30w==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap//TIEaw78QPiNPQb8dtO30w==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap//TIEaw78QPiNPQb8dtO30w==/small.png",
          },
        },
      },
      owner: {
        identity: "0x78362090cd0678ea2742ee8eb7f5c9482597da7b",
        primaryDomain: {
          name: "dabdab.eth",
        },
        addresses: ["0x78362090cd0678ea2742ee8eb7f5c9482597da7b"],
      },
    },
    {
      id: "ddc1742a6f5135aa6a2201e31f05c7ea89237f46009167f72ebfde129288ddf1",
      eventId: "170284",
      poapEvent: {
        eventName: "Artificial Intelligence Trends for Marketers",
        eventURL: "",
        startDate: "2024-03-06T00:00:00Z",
        endDate: "2024-03-07T00:00:00Z",
        country: "Puerto Rico",
        city: "San Juan",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/78QMaK/9ILzoxjqcbYFirw==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/78QMaK/9ILzoxjqcbYFirw==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/78QMaK/9ILzoxjqcbYFirw==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/78QMaK/9ILzoxjqcbYFirw==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/78QMaK/9ILzoxjqcbYFirw==/small.png",
          },
        },
      },
      owner: {
        identity: "0x2c4102342935f36f5de313550b9f066cb9ca098d",
        primaryDomain: null,
        addresses: ["0x2c4102342935f36f5de313550b9f066cb9ca098d"],
      },
    },
    {
      id: "fb2968d36e4bfb3d901213cfdf09c3a332a80bd2777987bd9a0517f2930c9347",
      eventId: "168746",
      poapEvent: {
        eventName: "Circuit Breaker Hacker",
        eventURL: "https://ethglobal.com/events/circuitbreaker",
        startDate: "2024-02-02T00:00:00Z",
        endDate: "2024-02-22T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/tiAwoU8YYYK0KrbKRsnqfQ==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/tiAwoU8YYYK0KrbKRsnqfQ==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/tiAwoU8YYYK0KrbKRsnqfQ==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/tiAwoU8YYYK0KrbKRsnqfQ==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/tiAwoU8YYYK0KrbKRsnqfQ==/small.png",
          },
        },
      },
      owner: {
        identity: "0xc8b0065e78c2c97f0a031d1325b909376cfa4256",
        primaryDomain: {
          name: "thetek.eth",
        },
        addresses: ["0xc8b0065e78c2c97f0a031d1325b909376cfa4256"],
      },
    },
    {
      id: "f964e2d37751ecc6b74cd1ec67c96a9b308a3e78aa86e42ed14adc2543cb648a",
      eventId: "168570",
      poapEvent: {
        eventName: "Chainlink Bootcamp 2024 - Certificate of Completion",
        eventURL: "https://chain.link",
        startDate: "2024-01-08T00:00:00Z",
        endDate: "2024-01-20T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/ZWlt1WZhCQg23ae5LImrrA==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/ZWlt1WZhCQg23ae5LImrrA==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/ZWlt1WZhCQg23ae5LImrrA==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/ZWlt1WZhCQg23ae5LImrrA==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/ZWlt1WZhCQg23ae5LImrrA==/small.png",
          },
        },
      },
      owner: {
        identity: "0x0ace4e9aab8d2b1e8fc8f0fee55f3796a472bc94",
        primaryDomain: null,
        addresses: ["0x0ace4e9aab8d2b1e8fc8f0fee55f3796a472bc94"],
      },
    },
    {
      id: "429bda348b99904fae9b47de67c3bb63cd4f8f0eba7823fb1c29a41ecb752e8d",
      eventId: "170271",
      poapEvent: {
        eventName: "WID3 Testing Aggregation",
        eventURL: "https://wid3.xyz",
        startDate: "2024-03-05T00:00:00Z",
        endDate: "2024-03-06T00:00:00Z",
        country: "Malta",
        city: "Msida",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/3eT/UjbGWMM70FLFNGjlJg==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/3eT/UjbGWMM70FLFNGjlJg==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/3eT/UjbGWMM70FLFNGjlJg==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/3eT/UjbGWMM70FLFNGjlJg==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/3eT/UjbGWMM70FLFNGjlJg==/small.png",
          },
        },
      },
      owner: {
        identity: "0x4e3a5626654b38a612eb10ce549da220797db2ac",
        primaryDomain: null,
        addresses: ["0x4e3a5626654b38a612eb10ce549da220797db2ac"],
      },
    },
    {
      symbol: "🪄☰",
      address: "0xc6b379d12f6fbec63c4cc3e0ef8d4636855f5f04",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xc6b379d12f6fbec63c4cc3e0ef8d4636855f5f04",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/4/TZ4LEeAufVUPSbbS2C0mOp+IbN49/t5nFpSjyrf9t8QAi8iAMeXmE6zFlhCISv/small.png",
      },
      name: "You can mint anything",
    },
    {
      symbol: "🐕🟨🐕",
      address: "0xa7038b3ae4100936ec9c82a6d0feb758fd303a0f",
      baseURI: "",
      blockchain: "ethereum",
      chainId: "1",
      decimals: 0,
      id: "10xa7038b3ae4100936ec9c82a6d0feb758fd303a0f",
      isSpam: false,
      logo: {
        small:
          "https://assets.airstack.xyz/image/logo/7dNFHfuwO6xHK/qY6iXy9A9O30XA7UGj47zLPXxPUiQBqB6hIsre7SS2CF4Ys6Zx/small.png",
      },
      name: "🐕🟨🐕",
    },
    {
      id: "6e86f9dc61123dd1b74b4de36c46aed97b8b5161d608d5e5a9cf57a63fbf86b0",
      eventId: "169280",
      poapEvent: {
        eventName: "Kleros Community Call - Feb28th",
        eventURL: "https://kleros.io/",
        startDate: "2024-02-28T00:00:00Z",
        endDate: "2024-02-28T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/N3OIHLvnHYyXw4gJjLLjrg==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/N3OIHLvnHYyXw4gJjLLjrg==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/N3OIHLvnHYyXw4gJjLLjrg==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/N3OIHLvnHYyXw4gJjLLjrg==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/N3OIHLvnHYyXw4gJjLLjrg==/small.png",
          },
        },
      },
      owner: {
        identity: "0x2cf84928261f655a47d04ec714d3bedf9375de46",
        primaryDomain: {
          name: "wuestenigel.eth",
        },
        addresses: ["0x2cf84928261f655a47d04ec714d3bedf9375de46"],
      },
    },
    {
      id: "5b9d5f0360ebbbaec9204f1c26437917dacab997f62f8d7a2e3c1f8d92333d1a",
      eventId: "167675",
      poapEvent: {
        eventName: "Spork Castle",
        eventURL: "https://www.ethdenver.com/",
        startDate: "2024-02-29T00:00:00Z",
        endDate: "2024-03-03T00:00:00Z",
        country: "USA",
        city: "Denver, CO",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/VzafWnh+c+yYtpGqAlDljg==/extra_small.png",
            large:
              "https://assets.airstack.xyz/image/poap/VzafWnh+c+yYtpGqAlDljg==/large.png",
            medium:
              "https://assets.airstack.xyz/image/poap/VzafWnh+c+yYtpGqAlDljg==/medium.png",
            original:
              "https://assets.airstack.xyz/image/poap/VzafWnh+c+yYtpGqAlDljg==/original_image.png",
            small:
              "https://assets.airstack.xyz/image/poap/VzafWnh+c+yYtpGqAlDljg==/small.png",
          },
        },
      },
      owner: {
        identity: "0x8cf13ac75ef8459609b648fadd8f32619ef05134",
        primaryDomain: null,
        addresses: ["0x8cf13ac75ef8459609b648fadd8f32619ef05134"],
      },
    },
    {
      id: "0fd5fa41a28235da6819282288370b7d14decdc92ca9cbb70853fd855b4fdd2f",
      eventId: "170115",
      poapEvent: {
        eventName:
          "Handbook for new employees first published, Valve, March 2012",
        eventURL: "https://twitter.com/yeysus",
        startDate: "2024-03-01T00:00:00Z",
        endDate: "2024-03-01T00:00:00Z",
        country: "",
        city: "",
        contentValue: {
          image: {
            extraSmall:
              "https://assets.airstack.xyz/image/poap/pZ90Cvps1g4VaChyoRX2JQ==/extra_small.gif",
            large:
              "https://assets.airstack.xyz/image/poap/pZ90Cvps1g4VaChyoRX2JQ==/large.gif",
            medium:
              "https://assets.airstack.xyz/image/poap/pZ90Cvps1g4VaChyoRX2JQ==/medium.gif",
            original:
              "https://assets.airstack.xyz/image/poap/pZ90Cvps1g4VaChyoRX2JQ==/original_image.gif",
            small:
              "https://assets.airstack.xyz/image/poap/pZ90Cvps1g4VaChyoRX2JQ==/small.gif",
          },
        },
      },
      owner: {
        identity: "0x0b32dec7592c6f3935ab65d589a8d10326b59209",
        primaryDomain: null,
        addresses: ["0x0b32dec7592c6f3935ab65d589a8d10326b59209"],
      },
    },
  ]);
  const [tempText, setTempText] = useState("");

  return (
    <ActionSheet
      isModal={true}
      ref={actionSheetRef}
      useBottomSafeAreaPadding
      id={props.sheetId}
      containerStyle={{ backgroundColor: "#000" }}
    >
      <View
        style={[
          {
            paddingHorizontal: 12,
            marginVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            flexShrink: 0,
          },
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
            placeholder="Search"
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
                borderColor: "rgba(255,255,255,0.2)",
                borderRadius: 12,
                paddingVertical: 12,
                borderWidth: 1,
                color: colors.bgWhite,
                fontSize: 14,
                lineHeight: 20,
                fontFamily: "Chirp_Bold",
                fontWeight: "500",
              },
            ]}
          />
        </View>
      </View>
      <View style={[{ flexBasis: 300 }]}>
        <FlatList
          {...scrollHandlers}
          contentContainerStyle={{
            paddingBottom: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
          style={[
            {
              flex: 1,
            },
          ]}
          //   onEndReachedThreshold={0.3}
          data={tokens}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <MemoizedSearchItem item={item} />}
        />
      </View>
    </ActionSheet>
  );
}

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
