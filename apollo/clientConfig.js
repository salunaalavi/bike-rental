import { InMemoryCache } from "apollo-cache-inmemory";

export default function (context) {
  return {
    httpLinkOptions: {
      uri: "https://bike-station.hasura.app/v1/graphql",
      credentials: "same-origin",
    },
    cache: new InMemoryCache(),
    wsEndpoint: "wss://bike-station.hasura.app/v1/graphql",
  };
}
