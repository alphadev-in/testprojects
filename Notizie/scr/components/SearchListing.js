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

export default function SearchListing({item, lengthData}) {
  // console.log(item.id);
  const title = item.title;
  const entities = new Entities();
  const navigation = useNavigation();
  // console.log(lengthData - 1);

  const _navigate = () => {
    try {
      navigation.push('NewsDetails2', {
        name: entities.decode(item.title),
        id: item.id,
        link: item.url,
      });
    } catch (error) {}
  };

  return (
    <View>
      <TouchableOpacity onPress={_navigate} activeOpacity={0.9}>
        <View style={styles.container}>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">
            {entities.decode(title)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfdfdf',
    padding: 10,
    marginTop: 5,
  },
  container2: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontFamily: global.font_family_title,
  },
});
