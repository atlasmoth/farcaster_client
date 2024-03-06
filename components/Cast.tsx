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
  const [data, setData] = useState([
    stateItems,
    ...[
      {
        hash: "0x07c8f7d8530690e7e859fc69a66f827975f9969f",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 246287,
          custodyAddress: "0x85e333a7ba335c531d070551de0aa11ae5a76157",
          username: "namsh310",
          displayName: "namsh310🎩 ",
          pfp: {
            url: "https://i.imgur.com/t0fYvoS.jpg",
          },
          profile: {
            bio: {
              text: "Let's be friends! Let's follow each other!😍 I want to be friends",
              mentionedProfiles: [],
            },
          },
          followerCount: 618,
          followingCount: 614,
          verifications: ["0x37116fd7ff3f99b60336b60e3a7dc44ec2fc6914"],
          verifiedAddresses: {
            eth_addresses: ["0x37116fd7ff3f99b60336b60e3a7dc44ec2fc6914"],
            sol_addresses: [],
          },
          activeStatus: "inactive",
        },
        text: "456 $DEGEN",
        timestamp: "2024-03-06T13:13:00.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x7b277632ca86037a6842a7e72a1fe296a569698d",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 355677,
          custodyAddress: "0xb308a87bd65e5c6792a1f4facceca8ef06630b21",
          username: "hassanandishe",
          displayName: "Andishe 🎩🍖",
          pfp: {
            url: "https://i.imgur.com/s5mfYPU.jpg",
          },
          profile: {
            bio: {
              text: "I love crypto and NFT\nBTC ETH SOL",
              mentionedProfiles: [],
            },
          },
          followerCount: 377,
          followingCount: 519,
          verifications: ["0x50d46b6ef71164ba33f01bb68ff287900116910f"],
          verifiedAddresses: {
            eth_addresses: ["0x50d46b6ef71164ba33f01bb68ff287900116910f"],
            sol_addresses: ["EwWm6LBDAr1Za65BXzUKMfoUqU2LaD1yAwozm3Q41noZ"],
          },
          activeStatus: "inactive",
        },
        text: "$DOG",
        timestamp: "2024-03-06T13:23:08.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0xb42ab291fcdaf00715878384e149750581bff0e1",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 338127,
          custodyAddress: "0xe008007d568c41147a3bd220afc6f8c321dbee97",
          username: "caksum",
          displayName: "Caksum",
          pfp: {
            url: "https://i.imgur.com/bfSMZF9.jpg",
          },
          profile: {
            bio: {
              text: "Pejuang nft",
              mentionedProfiles: [],
            },
          },
          followerCount: 17,
          followingCount: 98,
          verifications: ["0xa1fcc692813ec0a88a8ee34c1b06f0443097f8cd"],
          verifiedAddresses: {
            eth_addresses: ["0xa1fcc692813ec0a88a8ee34c1b06f0443097f8cd"],
            sol_addresses: ["9HK1AQ7ZP7wf5Q9pXxdRDPcNTGvHo5fZaMpndCcKaveB"],
          },
          activeStatus: "inactive",
        },
        text: "Degen",
        timestamp: "2024-03-06T13:35:39.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x87b3ae57fc1da18ef31c55b35398dc576c1725c2",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 321679,
          custodyAddress: "0x816ff8fb871d7f9140846ee1a6bd706daa190701",
          username: "ahadul007",
          displayName: "Ahadul",
          pfp: {
            url: "https://i.imgur.com/OC4eAe6.jpg",
          },
          profile: {
            bio: {
              text: "I love my life ",
              mentionedProfiles: [],
            },
          },
          followerCount: 761,
          followingCount: 916,
          verifications: ["0xf3f9a3d490226bd7e4d4f8979299638d8559a3db"],
          verifiedAddresses: {
            eth_addresses: ["0xf3f9a3d490226bd7e4d4f8979299638d8559a3db"],
            sol_addresses: ["AwgHG5GftrbX1bnw8XbdN7vVdZbXg311bGs2trHw2rmY"],
          },
          activeStatus: "inactive",
        },
        text: "LFG",
        timestamp: "2024-03-06T13:35:57.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0xcec49f70241b8aa496b3ae0a43cf01519a838951",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 278609,
          custodyAddress: "0x486b6338e7818666fbefb32817b9285cac9f5629",
          username: "kushalniraula",
          displayName: "Kushalniraula",
          pfp: {
            url: "https://i.imgur.com/WvhiqMk.jpg",
          },
          profile: {
            bio: {
              text: "Attitude is everything 🫵\nFollow me i will back u 🤞",
              mentionedProfiles: [],
            },
          },
          followerCount: 760,
          followingCount: 1010,
          verifications: ["0xccc59fae2b2194366d82b74b96f10a464621aa2b"],
          verifiedAddresses: {
            eth_addresses: ["0xccc59fae2b2194366d82b74b96f10a464621aa2b"],
            sol_addresses: [],
          },
          activeStatus: "inactive",
        },
        text: "402 DEGEN",
        timestamp: "2024-03-06T13:55:13.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x1b18945c4852f24af80a6fb45a36079f632e2bb6",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 255270,
          custodyAddress: "0xe9a5a4e3976679147ddeb7a09f3b08138b2283c8",
          username: "aryaseta05",
          displayName: "Aryaseta",
          pfp: {
            url: "https://i.imgur.com/WuipM1y.jpg",
          },
          profile: {
            bio: {
              text: "",
              mentionedProfiles: [],
            },
          },
          followerCount: 199,
          followingCount: 794,
          verifications: ["0x15100857dd6518ddab7a02f69a2376dc7a1b3872"],
          verifiedAddresses: {
            eth_addresses: ["0x15100857dd6518ddab7a02f69a2376dc7a1b3872"],
            sol_addresses: [],
          },
          activeStatus: "inactive",
        },
        text: "Not land",
        timestamp: "2024-03-06T13:58:07.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0xe2d9b10ee91f0b1bf3062f685e526cae8509fa67",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 334056,
          custodyAddress: "0xa7137211ebf977c76800b5aa3ceb842e391c1f43",
          username: "pharmtech86",
          displayName: "Ashraf Auwal ",
          pfp: {
            url: "https://i.imgur.com/aGvWxQp.jpg",
          },
          profile: {
            bio: {
              text: "A ND pharmaceutical technologist,a bsc health educator, airdrop hunter, content creator.I'm simple and caring person",
              mentionedProfiles: [],
            },
          },
          followerCount: 44,
          followingCount: 90,
          verifications: ["0x079fd2e9197e8f818d8170cba384ee2b6fb3b656"],
          verifiedAddresses: {
            eth_addresses: ["0x079fd2e9197e8f818d8170cba384ee2b6fb3b656"],
            sol_addresses: [],
          },
          activeStatus: "inactive",
        },
        text: "💪",
        timestamp: "2024-03-06T14:06:17.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x717f4c044f2cbc59e6f0a1f1fa6a38ce0452d6a7",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 314324,
          custodyAddress: "0x54615765a88b39282438a1906dcfdad3a00c90dc",
          username: "arjunroy52",
          displayName: "MAHAESHWAR CHANDRA ROY ",
          pfp: {
            url: "https://i.imgur.com/VyKnyKB.jpg",
          },
          profile: {
            bio: {
              text: "Follow me And more Airdrop 🎁",
              mentionedProfiles: [],
            },
          },
          followerCount: 236,
          followingCount: 787,
          verifications: ["0x96f56d47530db98cd8fdd2ec76667e13e4861db4"],
          verifiedAddresses: {
            eth_addresses: ["0x96f56d47530db98cd8fdd2ec76667e13e4861db4"],
            sol_addresses: ["BzDmLzaDnh2iHCS4E3NMDV397VKVPxP2juuswg6CcwPk"],
          },
          activeStatus: "inactive",
        },
        text: "$DOG",
        timestamp: "2024-03-06T14:28:14.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x6442567b8a890037340e121846accd10c14ef12d",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 236638,
          custodyAddress: "0xc5ae6f37a5e819fdbb509dfab52624c1bc1a9a4a",
          username: "uyekt",
          displayName: "Uyekt23",
          pfp: {
            url: "https://i.imgur.com/hdKq3yh.jpg",
          },
          profile: {
            bio: {
              text: "Gak ngurus cocote tonggo",
              mentionedProfiles: [],
            },
          },
          followerCount: 421,
          followingCount: 995,
          verifications: ["0xe8c0840acc6e4f4627a28cac8071c27262f7202a"],
          verifiedAddresses: {
            eth_addresses: ["0xe8c0840acc6e4f4627a28cac8071c27262f7202a"],
            sol_addresses: ["75jQ4n1HeWjusVt7VRtBNWwCCGL7ddpyVmvSwA5CeJvK"],
          },
          activeStatus: "active",
        },
        text: "Nothing to claim",
        timestamp: "2024-03-06T14:32:16.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0xf87723341687282567e313f70b585a6d2d21afce",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 378675,
          custodyAddress: "0x04561dbfd52b6dd9f22338622ca45a35340d0370",
          username: "mobimobinaz",
          displayName: "Mobinaz",
          pfp: {
            url: "https://i.imgur.com/141Wz93.jpg",
          },
          profile: {
            bio: {
              text: "Research \nScience\nPython",
              mentionedProfiles: [],
            },
          },
          followerCount: 62,
          followingCount: 128,
          verifications: ["0x067f8b585186d2661eeb30420dbf96e1e5ed69fa"],
          verifiedAddresses: {
            eth_addresses: ["0x067f8b585186d2661eeb30420dbf96e1e5ed69fa"],
            sol_addresses: [],
          },
          activeStatus: "inactive",
        },
        text: "I can't claim 😔 why?",
        timestamp: "2024-03-06T14:37:41.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x2f630c6ee28160601d588bcc3f56488086e97ceb",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 300116,
          custodyAddress: "0x9190bf0b58be752038656a2f2f55280fc494689b",
          username: "mroreo",
          displayName: "Raefs",
          pfp: {
            url: "https://i.imgur.com/y0fFNaR.jpg",
          },
          profile: {
            bio: {
              text: "Welcome my profile !",
              mentionedProfiles: [],
            },
          },
          followerCount: 188,
          followingCount: 258,
          verifications: ["0xf58cf6d7bc0f866f3a2683f79d1f8d5fe01c00c3"],
          verifiedAddresses: {
            eth_addresses: ["0xf58cf6d7bc0f866f3a2683f79d1f8d5fe01c00c3"],
            sol_addresses: [],
          },
          activeStatus: "inactive",
        },
        text: "What is criteria?",
        timestamp: "2024-03-06T14:44:01.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x2ce0337f1700681c5c97555fd539fff9b48eb9ea",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 242245,
          custodyAddress: "0x5b509940cefe446f450f9fa6ba4c073b919afd87",
          username: "defimazdoor",
          displayName: "Defi Mazdoor",
          pfp: {
            url: "https://i.imgur.com/3ynyAvq.jpg",
          },
          profile: {
            bio: {
              text: "Hello 👋 🤗 I am Mazdoor, exploring the Web3, Trying to find my footings. Exploring early-alphas, Airdrop is a Thing! Target 🎯 to my first mil",
              mentionedProfiles: [],
            },
          },
          followerCount: 320,
          followingCount: 428,
          verifications: ["0x103ed903c8d0e77abc6b8ca6b73ef064196ad849"],
          verifiedAddresses: {
            eth_addresses: ["0x103ed903c8d0e77abc6b8ca6b73ef064196ad849"],
            sol_addresses: ["7w3yBiAZbxywRv3JCNYYYVGNcrSaYcZLv2DqjZTcYANf"],
          },
          activeStatus: "inactive",
        },
        text: "What was the qualifying criteria to receive $DOG\nBecause I been using it past 2 months and I didn't qualify for the claim. Just wondering. Any valid & logical answers is highly appreciated.",
        timestamp: "2024-03-06T14:52:36.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0xeb744b4dabe54a53ecfa1205629ca74d377d8b42",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 241249,
          custodyAddress: "0x020b9e741964becd68866ce8228e1b16f50d72f3",
          username: "better99",
          displayName: "Nguyễn Bá Tùng 🎩",
          pfp: {
            url: "https://i.imgur.com/c7QGvng.jpg",
          },
          profile: {
            bio: {
              text: "Meme coin in game",
              mentionedProfiles: [],
            },
          },
          followerCount: 479,
          followingCount: 398,
          verifications: ["0x8943f19fb7430a2a78f3986f9153a4b0bf847785"],
          verifiedAddresses: {
            eth_addresses: ["0x8943f19fb7430a2a78f3986f9153a4b0bf847785"],
            sol_addresses: ["HdPQZhwALzoCJ65raxVrScquXbVbYR3iEyxseByUr16w"],
          },
          activeStatus: "active",
        },
        text: "https://bag-app-ten.vercel.app/frame/claim-token\nCheck and claim now people",
        timestamp: "2024-03-06T14:59:36.000Z",
        embeds: [
          {
            url: "https://bag-app-ten.vercel.app/frame/claim-token",
          },
        ],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
        frames: [
          {
            version: "vNext",
            title: "Bag Claim Token",
            image:
              "https://bag-app-ten.vercel.app/api/frame/claim-token/image?title=claim+%24DOG&subtitle=from+bag+wallet",
            buttons: [
              {
                index: 1,
                title: "Check",
                action_type: "post",
              },
            ],
            input: {},
            state: {},
            post_url:
              "https://bag-app-ten.vercel.app/api/frame/claim-token/start",
            frames_url: "https://bag-app-ten.vercel.app/frame/claim-token",
          },
        ],
      },
      {
        hash: "0xf0d68f6457755a912be7ea9cd470108c3970bb43",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 378525,
          custodyAddress: "0xcf787a118ae6258147717ff5a92f9152a354113a",
          username: "pedram",
          displayName: "𝓟𝓮𝓭𝓻𝓪𝓶",
          pfp: {
            url: "https://i.imgur.com/gg8ZDJj.jpg",
          },
          profile: {
            bio: {
              text: "𝕴𝖒𝖕𝖚𝖑𝖘𝖎𝖛𝖊 𝖛 𝕬𝖒𝖇𝖎𝖙𝖎𝖔𝖘",
              mentionedProfiles: [],
            },
          },
          followerCount: 179,
          followingCount: 425,
          verifications: [
            "0x553ceef07c2d49d0fef26d10b5c55b444440fac9",
            "0xadfc0584618ac529b8d41d17f9cfa9c7e10bb9fd",
          ],
          verifiedAddresses: {
            eth_addresses: [
              "0x553ceef07c2d49d0fef26d10b5c55b444440fac9",
              "0xadfc0584618ac529b8d41d17f9cfa9c7e10bb9fd",
            ],
            sol_addresses: ["FcU458c9LAb4YSF1SbmsVfUNNsaTzqabPk6BXMGAyJuf"],
          },
          activeStatus: "inactive",
        },
        text: "yup",
        timestamp: "2024-03-06T15:11:49.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x8fc81d64309ca599c7eab5cb00c829861fdbbb47",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 315779,
          custodyAddress: "0xf86e2ceb3c30492b61bbe569a6950c3b9d7045cf",
          username: "seedeey",
          displayName: "Alamin",
          pfp: {
            url: "https://i.imgur.com/vdPtkmX.jpg",
          },
          profile: {
            bio: {
              text: "Follow me Let’s grind together",
              mentionedProfiles: [],
            },
          },
          followerCount: 56,
          followingCount: 176,
          verifications: [
            "0xf86e2ceb3c30492b61bbe569a6950c3b9d7045cf",
            "0xf86e2ceb3c30492b61bbe569a6950c3b9d7045cf",
          ],
          verifiedAddresses: {
            eth_addresses: [
              "0xf86e2ceb3c30492b61bbe569a6950c3b9d7045cf",
              "0xf86e2ceb3c30492b61bbe569a6950c3b9d7045cf",
            ],
            sol_addresses: ["6GdFrQS59SyViCigAnbLZZ8hbsQjHCaepi3V7GsmfUwh"],
          },
          activeStatus: "inactive",
        },
        text: "cant claim",
        timestamp: "2024-03-06T15:43:48.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0xbb3ae027e97373a09c76824dbfd17147163c7d45",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 322956,
          custodyAddress: "0xdc02e4e414200f2ed53261f9a554c69f789ebb10",
          username: "wafa",
          displayName: "Wafa ",
          pfp: {
            url: "https://i.imgur.com/asgLQmH.png",
          },
          profile: {
            bio: {
              text: "Please healt",
              mentionedProfiles: [],
            },
          },
          followerCount: 396,
          followingCount: 219,
          verifications: ["0xdc02e4e414200f2ed53261f9a554c69f789ebb10"],
          verifiedAddresses: {
            eth_addresses: ["0xdc02e4e414200f2ed53261f9a554c69f789ebb10"],
            sol_addresses: ["5bZy4oZq2AkJ31N1aasF7BerKHChjrzw9PZVjHNZr6cB"],
          },
          activeStatus: "inactive",
        },
        text: "100 $Degen",
        timestamp: "2024-03-06T16:28:13.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
      {
        hash: "0x85c2a2c6cddcd917ca5df5fb201a6ec85a52e746",
        parentHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentUrl: null,
        rootParentUrl: "https://warpcast.com/~/channel/frames",
        threadHash: "0xa0f33da3cdb298d4b28bddbf4a4fa8c319a8c16f",
        parentAuthor: {
          fid: 7963,
        },
        author: {
          fid: 292872,
          custodyAddress: "0x32db13e4c637cdd0c049d90626421c7b77fe77c5",
          username: "rasel9245",
          displayName: "Md Rasel Khan",
          pfp: {
            url: "https://i.imgur.com/ARP6tbN.jpg",
          },
          profile: {
            bio: {
              text: "Online",
              mentionedProfiles: [],
            },
          },
          followerCount: 56,
          followingCount: 157,
          verifications: [
            "0x8001572ec2132c1fcb3921f32a101b109ed17fd9",
            "0x8001572ec2132c1fcb3921f32a101b109ed17fd9",
          ],
          verifiedAddresses: {
            eth_addresses: [
              "0x8001572ec2132c1fcb3921f32a101b109ed17fd9",
              "0x8001572ec2132c1fcb3921f32a101b109ed17fd9",
            ],
            sol_addresses: [],
          },
          activeStatus: "inactive",
        },
        text: "Dog",
        timestamp: "2024-03-06T16:30:52.000Z",
        embeds: [],
        mentionedProfiles: [],
        reactions: {
          count: 0,
          fids: [],
        },
        recasts: {
          count: 0,
          fids: [],
        },
        recasters: [],
        replies: {
          count: 0,
        },
      },
    ],
  ]);

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
