import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import backimg from '../assets/img/backimg.png';
import logo from '../assets/img/logo.png';
import {global, colors} from '../utils';
import CategoryListing from '../components/CategoryListing';
import serverRequest from '../helper/serverRequest';
import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
import Outbrain from '../components/Outbrain';
import GoogleAds from '../components/GoogleAds';

const Main = ({navigation}) => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(false);
  useEffect(() => {
    ResultData();
  }, [index]);

  const ResultData = async () => {
    try {
      const res = await serverRequest(
        '/wp-json/wp/v2/categories?include=91,1,75,90,99,7,71,9,386828,388191,386836',
      );
      setNews(res);
      setLoading(false);
    } catch (error) {}
  };

  const renderItemFile = ({item}) => {
    return <CategoryListing item={item} />;
  };
  const footer = () => {
    return (
      <View>
        <GoogleAds />
        <Outbrain />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={news}
          extraData={news}
          renderItem={renderItemFile}
          keyExtractor={(item, index) => String(item.id)}
          contentContainerStyle={{flexGrow: 1}}
          ListFooterComponent={footer}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingTop: 10,
  },
  container2: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: 'red',
    borderRadius: 10,
    width: windowWidth - 20,
    height: 70,
    margin: 5,
    marginBottom: 100,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleTextcenter: {
    fontSize: 16,
    fontFamily: global.font_family_title,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default Main;
