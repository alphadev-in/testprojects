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
const VideoDetails = ({route, navigation}) => {
  const {name, id} = route.params;

  return (
    <View style={styles.container}>
      <WebView
        scrollEnabled={false}
        source={{uri: 'https://www.dailymotion.com/embed/video/' + id}}
        style={{flex: 1, width: '100%', aspectRatio: 16.0 / 9.0}}
      />
      <Text style={styles.titleText}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 16,
    fontFamily: global.font_family_description,
    paddingTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 15,
  },
});

export default VideoDetails;
