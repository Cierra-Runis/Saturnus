import {useNavigation, useRoute} from '@react-navigation/native';
import {Appbar, Text, useTheme} from 'react-native-paper';
import {DaiKanWa} from './home_page';
import {Image, View} from 'react-native';

export function DaiKanWaDetailPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const daiKanWa = route.params as DaiKanWa;

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <Appbar.Header>
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          alignContent: 'center',
        }}>
        <Image
          source={{uri: daiKanWa.processed_detail_img_url}}
          style={{
            aspectRatio: `${daiKanWa.detail_width} / ${daiKanWa.detail_height}`,
            margin: 8,
          }}
        />
        <Text>114</Text>
      </View>
    </View>
  );
}
