import React, {useEffect} from 'react';
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
import CatChecker from '../helper/CatChecker';
const Entities = require('html-entities').AllHtmlEntities;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
import * as Animatable from 'react-native-animatable';

export default function CatNews({item}) {
  const title = item.title.rendered;
  const image = item.featured_image_urls.medium_large;
  const navigation = useNavigation();
  const entities = new Entities();
  // console.log(item.categories[0]);
  let categoryType = CatChecker(item.categories[0]);

  const _navigate = () => {
    try {
      navigation.navigate('NewsDetails', {
        name: entities.decode(item.title.rendered),
        image: item.featured_image_urls.medium_large,
        content: item.content.rendered,
        link: item.link,
        date: Moment(item.date).format('DD-MM-YYYY'),
        categories: categoryType,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={_navigate} activeOpacity={0.9}>
      <View style={styles.container}>
        <View style={{height: 190}}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View
          style={{
            height: 190,
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              backgroundColor: 'red',
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
              borderRadius: 5,
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              color: 'white',
              fontFamily: global.font_family_description,
            }}>
            {categoryType}
          </Text>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">
            {entities.decode(title)}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {entities.decode(title)}
          </Text>
          <Text style={styles.titleTextcenter}>LEGGI</Text>
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
    width: windowWidth - 20,
    height: 380,
    margin: 10,
    backgroundColor: 'white',
  },
  image: {
    width: windowWidth - 21,
    height: 200,
    overflow: 'hidden',
    resizeMode: 'stretch',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 5,
    fontFamily: global.font_family_title,
  },
  titleTextcenter: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
    alignSelf: 'center',
    fontFamily: global.font_family_title,
  },
  descriptionText: {
    fontSize: 16,
    paddingBottom: 5,
    fontFamily: global.font_family_description,
  },
});
