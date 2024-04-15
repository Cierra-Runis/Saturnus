import {Appbar, Card, FAB, List, Text, useTheme} from 'react-native-paper';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from './RootPage';
import Scaffold from './Scaffold';
import {ScrollView, StyleSheet} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailPage'>;

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

export function DetailPage({route, navigation}: Props) {
  const {word} = route.params;
  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  console.log(word.phrases);

  return (
    <Scaffold
      appbar={
        <Appbar.Header>
          <Appbar.BackAction onPress={navigation.goBack} />
          <Appbar.Content title={word.word} />
          <Appbar.Action icon="calendar" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
      }
      body={
        <ScrollView>
          <Card style={{margin: 8}}>
            <Card.Title title="释义" titleVariant="titleLarge" />
            <Card.Content>
              {word.translations.map(e => (
                <List.Item
                  left={() => <Text>{e.types.join('. ')}.</Text>}
                  title={e.translation}
                />
              ))}
            </Card.Content>
          </Card>
          {word.phrases.length > 0 && (
            <Card style={{margin: 8}}>
              <Card.Title title="短语" titleVariant="titleLarge" />
              <Card.Content>
                {word.phrases.map(e => (
                  <List.Item title={e.phrase} description={e.translation} />
                ))}
              </Card.Content>
            </Card>
          )}
        </ScrollView>
      }
      bottomNavigation={
        <Appbar
          style={[
            {
              height: BOTTOM_APPBAR_HEIGHT + bottom,
              backgroundColor: theme.colors.elevation.level2,
            },
          ]}>
          <Appbar.Action icon="archive" onPress={() => {}} />
          <Appbar.Action icon="label" onPress={() => {}} />
          <FAB
            mode="flat"
            size="medium"
            icon="heart-outline"
            onPress={() => {}}
            style={[
              styles.fab,
              {top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2},
            ]}
          />
        </Appbar>
      }
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
  },
});
