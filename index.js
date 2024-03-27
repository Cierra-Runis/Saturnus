/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {RootPage} from './src/main';
import {PaperProvider} from 'react-native-paper';
import {App} from './src/common/common';
import * as React from 'react';

export default function Main() {
  return (
    <PaperProvider>
      <RootPage />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(App.name, () => Main);
