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

export default function NewsListingLatest({item}) {
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
      <View style={styles.container}>
        <View
          style={{
            height: 50,
            width: 50,
            marginLeft: 10,
            marginRight: 10,
            alignSelf: 'center',
          }}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: windowWidth - 80,
            borderBottomColor: '#efefef',
            borderBottomWidth: 1,
          }}>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">
            {entities.decode(title)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingVertical: 10,
    fontFamily: global.font_family_description,
  },
  image: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 25,
  },
  titleText: {
    fontSize: 16,
    fontFamily: global.font_family_title,
    paddingTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 15,
    paddingRight: 10,
  },
});
