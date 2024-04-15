import {ScrollViewProps, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as React from 'react';

type Props = ScrollViewProps & {
  appbar?: React.ReactNode;
  body?: React.ReactNode;
  bottomNavigation?: React.ReactNode;
};

export default function Scaffold({appbar, body, bottomNavigation}: Props) {
  const theme = useTheme();

  const insets = useSafeAreaInsets();

  const viewStyle = [
    styles.container,
    {
      backgroundColor: theme.colors.background,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.left,
    },
  ];

  return (
    <View style={viewStyle}>
      {appbar}
      <View style={viewStyle}>{body}</View>
      {bottomNavigation}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});
