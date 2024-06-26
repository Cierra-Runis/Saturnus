import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Button,
  Card,
  Chip,
  Text,
} from 'react-native-paper';
import useSWR from 'swr';
import {App} from '../common/common';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootPage';
import {EnglishWord} from '../models/EnglishWord';
import Scaffold from './Scaffold';

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailPage'
>;

function DaiKanWaCard({word}: {word: string}) {
  const navigator = useNavigation<ProfileScreenNavigationProp>();

  const {data, error, isLoading} = useSWR<EnglishWord>(
    `https://raw.githubusercontent.com/Cierra-Runis/EnglishWords/main/json/${word}.json`,
    fetcher,
  );

  if (error) {
    return <Text>Error</Text>;
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Card
      onPress={() => {
        navigator.navigate('DetailPage', {word: data!});
      }}>
      <Card.Title title={data?.word} />
      <Card.Content>
        <View
          style={{
            gap: 8,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data?.translations.map((e, index) => (
            <Chip key={index}>
              {e.types.join('.')}. {e.translation}
            </Chip>
          ))}
        </View>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => {}} icon="heart-outline">
          <Text>收藏</Text>
        </Button>
      </Card.Actions>
    </Card>
  );
}

export const HomePage = () => {
  const {data, error, isLoading} = useSWR<string[]>(
    'https://raw.githubusercontent.com/Cierra-Runis/EnglishWords/main/words.json',
    fetcher,
  );

  const ref = useRef<FlatList<string>>(null);
  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollToOffset({offset: 0, animated: true});
    }
  };

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <Scaffold
      appbar={
        <Appbar.Header>
          <Appbar.Content
            title={
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>{App.name}</Text>
            }
          />
          <Appbar.Action icon="rocket" onPress={scrollToTop} />
        </Appbar.Header>
      }
      body={
        isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            ref={ref}
            data={shuffle(data ?? [])}
            renderItem={({item: word}) => (
              <View style={{padding: 16}}>
                <DaiKanWaCard word={word} />
              </View>
            )}
          />
        )
      }
    />
  );
};

const shuffle = (array: Array<any>) => array.sort(() => Math.random() - 0.5);
