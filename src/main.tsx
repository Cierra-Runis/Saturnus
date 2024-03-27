import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {HomePage} from './pages/home_page';
import {NotificationsPage} from './pages/notifications_page';
import {AccountPage} from './pages/recents_route';

export function RootPage() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'music',
      title: '主页',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'notifications',
      title: '消息',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
    {
      key: 'account',
      title: '个人',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomePage,
    notifications: NotificationsPage,
    account: AccountPage,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
