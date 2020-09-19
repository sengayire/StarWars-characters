import React from 'react';

import { ApolloProvider } from 'react-apollo';

import  Navigation  from './src/navigation';
import apollpClient from './Config/apolloClient';

const  App = ()  => {
  return (
    <ApolloProvider client={apollpClient}>
      <Navigation />
    </ApolloProvider>
  );
}

export default  App