import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
  uri: process.env.SERVER_URI,
  clientState: {
    defaults,
    resolvers,
  },
});
