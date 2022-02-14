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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
import CatChecker from '../helper/CatChecker';

export default function NewsListing({item}) {
  const title = item.title.rendered;
  const image = item.featured_image_urls.medium_large;
  const navigation = useNavigation();
  const description = item.excerpt.rendered;
  const entities = new Entities();
  let categoryType = CatChecker(item.categories[0]);
  const DEFAULT_PROPS = {
    tagsStyles: {
      p: {
        fontSize: 12,
        color: 'black',
        width: windowWidth - 70,
        fontFamily: global.font_family_description,
      },
      div: {
        fontSize: 12,
        color: 'black',
        width: windowWidth - 70,
        fontFamily: global.font_family_description,
      },
    },
  };
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
      <View style={styles.container}>
        <View style={{height: 190}}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View
          style={{
            height: 185,
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderWidth: 2,
            borderColor: 'white',
          }}>
          <View
            style={{
              height: 85,
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
            <Text
              style={styles.titleText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {entities.decode(title)}
            </Text>
          </View>
          <View style={{height: 30}}>
            <HTML html={description} {...DEFAULT_PROPS} />
          </View>
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.titleTextcenter}>LEGGI</Text>
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
    width: windowWidth - 20,
    height: 380,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: 'white',
  },
  image: {
    width: windowWidth - 20,
    height: 210,
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  titleText: {
    paddingTop:10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    lineHeight:20,
    fontFamily: global.font_family_title,
  },
  titleTextcenter: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
    height: 50,
    alignSelf: 'center',
    fontFamily: global.font_family_description,
  },
  descriptionText: {
    fontSize: 16,
    paddingBottom: 5,
    fontFamily: global.font_family_description,
  },
});
