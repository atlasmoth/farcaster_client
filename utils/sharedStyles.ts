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

export function getPoaps({
  address,
  cursor,
}: {
  address: string;
  cursor: string;
}) {
  const queryObj = {
    query: `query GetAllPOAPs {
        Poaps(input: {filter: {owner: {_in: ["${address}"]}}, blockchain: ALL,cursor : "${cursor}",order: {createdAtBlockNumber : DESC},limit: 200}) {
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
      }`,
  };
  return queryObj;
}
export function getGqlQuery({
  address,
  erc721Cursor,
}: {
  address: string;
  erc721Cursor?: string;
  poapCursor?: string;
}) {
  const queryObj = {
    query: `
    query token {
        erc721: TokenBalances(
          input: {filter: {owner: {_in: ["${address}"]}, tokenType: {_in: [ERC721]}, tokenAddress: {_nin: ["0x22C1f6050E56d2876009903609a2cC3fEf83B415"]}}, limit: 200,
          cursor:"${erc721Cursor}", order: {lastUpdatedTimestamp: DESC},
          blockchain: ethereum}
        ) {
          data: TokenBalance {
            amount
            formattedAmount
            chainId
            id
            tokenAddress
            tokenId
            tokenType
            token {
              name
              symbol
              baseURI
            logo {
              large
              external
              medium
              original
              small
            }
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
  token: {
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
  };
}

export type Token = (Poap & Erc721)[];
