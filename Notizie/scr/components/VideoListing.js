import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {colors, global} from '../utils';
import {navigate} from '../utils/NavigationService';
import {useNavigation} from '@react-navigation/native';
import Moment from 'moment';
import {useSelector} from 'react-redux';
import {create} from 'react-test-renderer';
const Entities = require('html-entities').AllHtmlEntities;
import {WebView} from 'react-native-webview';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import GoogleAds from '../components/GoogleAds';
export default function VideoListing({item}) {
  const title = item.title;
  const navigation = useNavigation();
  const entities = new Entities();

  return (
    <View>
      <View style={styles.container}>
        <WebView
          javaScriptEnabled={true}
          scrollEnabled={false}
          allowsFullscreenVideo={true}
          source={{uri: 'https://www.dailymotion.com/embed/video/' + item.id}}
          style={{flex: 1, width: '100%', aspectRatio: 16.0 / 9.0}}
        />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <GoogleAds />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 25,
  },
  titleText: {
    fontSize: 15,
    fontFamily: global.font_family_description,
    paddingTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
