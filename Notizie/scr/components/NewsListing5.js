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
import HTML from 'react-native-render-html';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CatChecker from '../helper/CatChecker';

export default function NewsListing5({item}) {
  const title = item.title.rendered;
  const image = item.featured_image_urls.medium_large;
  const navigation = useNavigation();
  const description = item.content.rendered;
  const entities = new Entities();
  let categoryType = CatChecker(item.categories[0]);

  const _navigate = () => {
    try {
      navigation.push('NewsDetails', {
        pid: item.categories[0],
        name: entities.decode(item.title.rendered),
        image: item.featured_image_urls.medium_large,
        content: item.content.rendered,
        link: item.link,
        date: Moment(item.date).format('DD-MM-YYYY'),
        categories: categoryType,
        author: item.author,
        id: item.id,
      });
    } catch (error) {}
  };

  return (
    <TouchableOpacity onPress={_navigate} activeOpacity={0.9}>
      <View style={{backgroundColor: '#0267C1'}}>
        <View style={styles.container}>
          <View style={{height: 100}}>
            <Image source={{uri: image}} style={styles.image} />
          </View>
          <View
            style={{
              height: 95,
              backgroundColor: 'white',
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderWidth: 2,
              borderColor: 'white',
            }}>
            <Text
              style={styles.titleText}
              numberOfLines={3}
              ellipsizeMode="tail">
              {entities.decode(title)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    shadowColor: '#efefef',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    width: 250,
    height: 200,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: 'white',
  },
  image: {
    width: 250,
    height: 110,
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
    fontFamily: global.font_family_title,
  },
  titleTextcenter: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
    alignSelf: 'center',
    fontFamily: global.font_family_description,
  },
  descriptionText: {
    fontSize: 16,
    paddingBottom: 5,
    fontFamily: global.font_family_description,
  },
});
