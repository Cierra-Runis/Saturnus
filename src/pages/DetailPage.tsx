import {Appbar, FAB, Text, useTheme} from 'react-native-paper';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScreenWrapper from './ScreenWrapper';
import {RootStackParamList} from './RootPage';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailPage'>;

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

export function DetailPage({route, navigation}: Props) {
  const {word} = route.params;
  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <>
      <Appbar.Header safeAreaInsets={{top: 0}}>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScreenWrapper>
        <Text>{word}</Text>
      </ScreenWrapper>

      <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.elevation.level2,
          },
        ]}
        safeAreaInsets={{bottom}}>
        <Appbar.Action icon="archive" onPress={() => {}} />
        <Appbar.Action icon="email" onPress={() => {}} />
        <Appbar.Action icon="label" onPress={() => {}} />
        <Appbar.Action icon="delete" onPress={() => {}} />
        <FAB
          mode="flat"
          size="medium"
          icon="plus"
          onPress={() => {}}
          style={[
            styles.fab,
            {top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2},
          ]}
        />
      </Appbar>
    </>
  );
}

const styles = StyleSheet.create({
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
