import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {HomePage} from './pages/home_page';
import {FavouritePage} from './pages/favourite_route';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DaiKanWaDetailPage as DaiKanWaDetailPage} from './pages/daiKanWaDetailPage';

const Stack = createNativeStackNavigator();

function _RootPage() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: '主页',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'favouritePage',
      title: '收藏',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    favouritePage: FavouritePage,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export function RootPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="root "
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="root" component={_RootPage} />
        <Stack.Screen
          name="daiKanWaDetailPage"
          component={DaiKanWaDetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
