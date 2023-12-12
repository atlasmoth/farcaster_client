import { StyleSheet } from "react-native";

export const colors = {
  bgWhite: "#fff",
  grey: "rgb(153, 153, 153);",
  black: "#000",
  bgWhiteTransparent: "rgba(0, 0, 0, 0.15)",
  blue: "#0C66CD",
};

export const sharedContainerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.bgWhite,
    paddingBottom: 20,
  },
});

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const AIRSTACK_URL = "https://api.airstack.xyz/gql";

export function getPoaps({ cursor }: { cursor: string }) {
  const queryObj = {
    query: `
    query GetAllPOAPs {
      Poaps(
        input: {
          filter: { createdAtBlockNumber: { _gt: 0 } }
          blockchain: ALL
          order: { createdAtBlockNumber: DESC }
          limit: 200
          cursor : "${cursor}"
        }
      ) {
        Poap {
          id
          eventId
          poapEvent {
            eventName
            eventURL
            startDate
            endDate
            country
            city
            contentValue {
              image {
                extraSmall
                large
                medium
                original
                small
              }
            }
          }
          owner {
            identity
            primaryDomain {
              name
            }
            addresses
          }
        }
        pageInfo {
          hasNextPage
          hasPrevPage
          nextCursor
          prevCursor
        }
      }
    }
    `,
  };
  return queryObj;
}
export function getGqlQuery({ erc721Cursor }: { erc721Cursor?: string }) {
  const queryObj = {
    query: `
    query FetchAllNFTs {
      Tokens(
        input: {
          blockchain: ethereum
          limit: 200
          cursor : "${erc721Cursor}"
          filter: {
            type: { _in: ERC721 }
            isSpam: { _eq: false }
            name: { _gt: " " }
          }
          order: { symbol: DESC }
        }
      ) {
        Token {
          symbol
          address
          baseURI
          blockchain
          chainId
          decimals
          id
          isSpam
          logo {
            medium
          }
          name
        }
        pageInfo {
          hasNextPage
          hasPrevPage
          nextCursor
          prevCursor
        }
      }
    }
    
      `,
  };
  return queryObj;
}
export function getNftUsers({ address }: { address: string }) {
  const queryObj = {
    query: `query MyQuery {
    TokenBalances(
      input: {
        filter: {
          tokenAddress: { _eq: "${address}" }
        }
        blockchain: ethereum
        limit: 200
        order: { lastUpdatedTimestamp: DESC }
      }
    ) {
      TokenBalance {
        owner {
          socials(
            input: { filter: { _and: [{ dappName: { _eq: farcaster } }] } }
          ) {
            profileName
            userId
          }
        }
      }
    }
  }
  `,
  };
  return queryObj;
}
export function getPoapUsers({ address }: { address: string }) {
  const queryObj = {
    query: `query MyQuery {
      Poaps(
        input: {
          filter: { eventId: { _eq: "${address}" }}
          blockchain: ALL
          limit: 200
          order: {createdAtBlockNumber : DESC  }
        }
      ) {
        Poap {
          owner {
            socials(input: { filter: { dappName: { _eq: farcaster } } }) {
              profileName
              userId
            }
          }
        }
      }
    }
    
  `,
  };
  return queryObj;
}

export interface PoapEvent {
  eventName: string;
  eventURL: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  contentValue: {
    image: {
      extraSmall: string;
      large: string;
      medium: string;
      original: string;
      small: string;
    };
  };
}

export interface PoapOwner {
  identity: string;
  primaryDomain: {
    name: string;
  };
  addresses: string[];
}

export interface Poap {
  id: string;
  eventId: string;
  poapEvent: PoapEvent;
  owner: PoapOwner;
}

export interface Erc721 {
  amount: number;
  formattedAmount: string;
  chainId: string;
  id: string;
  tokenAddress: string;
  tokenId: string;
  tokenType: string;
  address: string;
  name: string;
  symbol: string;
  baseURI: string;
  logo: {
    large: string;
    external: string;
    medium: string;
    original: string;
    small: string;
  };
}
export function cleanHashtag(input: string) {
  const cleanedString = input?.replaceAll(" ", "");

  const truncatedString = cleanedString?.slice(0, 25);

  return `${truncatedString}${cleanedString?.length > 25 ? "..." : ""}`;
}

export type Token = (Poap & Erc721)[];

export function removeDuplicates(arr) {
  const seen = new Set();
  const filteredArr = [];

  for (let obj of arr) {
    const id = obj.address || obj.eventId;
    if (!seen.has(id)) {
      seen.add(id);
      filteredArr.push(obj);
    }
  }

  return filteredArr;
}
