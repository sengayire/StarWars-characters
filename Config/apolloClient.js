import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import config from '../config';
const { AUTHORIZATION_KEY } = config;

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${AUTHORIZATION_KEY}`
    }
  }),
  cache: new InMemoryCache()
});

export default client;
