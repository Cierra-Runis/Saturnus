/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {RootPage} from './src/main';
import {PaperProvider} from 'react-native-paper';
import React from 'react';
import {App} from './src/common/common';

export default function Main() {
  return (
    <PaperProvider>
      <RootPage />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(App.name, () => Main);
