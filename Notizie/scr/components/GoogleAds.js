import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
export default function GoogleAds(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    // const USERDATA = 'USERDATA';
    // try {
    //   const jsonValue = await AsyncStorage.getItem('@' + USERDATA);
    //   return jsonValue != null ? setData(JSON.parse(jsonValue)) : null;
    // } catch (e) {
    //   // error reading value
    // }
  };

  return data === null ? (
    <View></View>
  ) : (
    <View style={{width: windowWidth - 30}}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={(error) => {
          console.error('Advert failed to load: ', error);
        }}
      />
    </View>
  );
}
