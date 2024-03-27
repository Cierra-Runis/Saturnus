import React, {useRef} from 'react';
import {FlatList, Image, View} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Button,
  Card,
  Text,
} from 'react-native-paper';
import useSWR from 'swr';
import {App} from '../common/common';
import {useNavigation} from '@react-navigation/native';

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export interface DaiKanWa {
  uuid: string;
  raw_preview_img_url: string;
  processed_preview_img_url: string;
  preview_width: string;
  preview_height: string;
  raw_detail_img_url: string;
  processed_detail_img_url: string;
  detail_width: string;
  detail_height: string;
}

function DaiKanWaCard({daiKanWa}: {daiKanWa: DaiKanWa}) {
  const navigator = useNavigation();

  return (
    <Card
      onPress={() => {
        navigator.navigate('daiKanWaDetailPage', daiKanWa);
      }}>
      <Card.Title title={daiKanWa.uuid} />
      <Card.Content style={{alignItems: 'center'}}>
        <Image
          source={{uri: daiKanWa.processed_preview_img_url}}
          width={Number.parseInt(daiKanWa.preview_width, 10)}
          height={Number.parseInt(daiKanWa.preview_height, 10)}
        />
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => {}} icon="heart">
          <Text>收藏</Text>
        </Button>
      </Card.Actions>
    </Card>
  );
}

export const HomePage = () => {
  const {data, error, isLoading} = useSWR<DaiKanWa[]>(
    'https://raw.githubusercontent.com/Cierra-Runis/Today_Daikanwa/main/data/data.json',
    fetcher,
  );

  const ref = useRef<FlatList<DaiKanWa>>(null);
  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollToOffset({offset: 0, animated: true});
    }
  };

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content
          title={
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{App.name}</Text>
          }
        />
        <Appbar.Action icon="rocket" onPress={scrollToTop} />
      </Appbar.Header>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          ref={ref}
          data={data}
          renderItem={({item}) => (
            <View style={{padding: 16}}>
              <DaiKanWaCard daiKanWa={item} />
            </View>
          )}
        />
      )}
    </>
  );
};
