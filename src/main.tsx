import React from 'react';
import {StatusBar} from 'react-native';
import {RootPage} from './pages/RootPage';
import {PaperProvider} from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor={'#0000'} translucent />
      <RootPage />
    </PaperProvider>
  );
}
