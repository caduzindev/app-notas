import 'react-native-gesture-handler';
import React from 'react';
import RootRoutes from './routes';
import { ApolloProvider } from '@apollo/client';
import Client from './services/apiGraphql'

export default function App() {
  return (
    <ApolloProvider client={Client}>
        <RootRoutes/>
    </ApolloProvider>
  );
}
