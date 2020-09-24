import React from 'react';
import { ApolloProvider } from 'react-apollo';

import  Navigation  from './src/navigation';
import apolloClient from './Config/apolloClient';

const  App = ()  => {
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
    </ApolloProvider>
  );
}

export default  App