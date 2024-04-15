import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DetailPage as DetailPage} from './DetailPage';
import {BottomNavigation} from 'react-native-paper';
import {HomePage} from './HomePage';
import {EnglishWord} from '../models/EnglishWord';
import {FavouritePage} from './FavouritePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  RootPage: undefined;
  DetailPage: {word: EnglishWord};
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RootPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="RootPage" component={_RootPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function _RootPage() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: '主页',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'favourite',
      title: '收藏',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    favourite: FavouritePage,
  });

  return (
    <BottomNavigation
      sceneAnimationEnabled
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
