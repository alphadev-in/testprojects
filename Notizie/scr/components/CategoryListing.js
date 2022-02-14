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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
import temp from '../assets/img/temp.jpg';

export default function CategoryListing({item}) {
  const entities = new Entities();
  const title = entities.decode(item.name);
  const navigation = useNavigation();

  const _navigate = () => {
    try {
      navigation.navigate('CategoryMain', {
        name: entities.decode(item.name),
        id: item.id,
      });
    } catch (error) {}
  };

  return (
    <TouchableOpacity onPress={_navigate} activeOpacity={0.9}>
      <View style={styles.container}>
        <Text style={styles.titleTextcenter}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    width: windowWidth / 2 - 20,
    height: 70,
    margin: 5,
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleTextcenter: {
    fontSize: 16,
    fontFamily: global.font_family_title,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
