import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const auth = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_ACCESS_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: auth.concat(link),
});

export default client;
