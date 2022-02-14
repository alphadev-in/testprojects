import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Linking,
  Alert,
  DeviceEventEmitter,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import backimg from '../assets/img/backimg.png';
import logo from '../assets/img/logo.png';
import {global, colors} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import serverRequest from '../helper/serverRequest';
const CATEGORIES = 'CATEGORIES';
import {fcmService} from '../../FCMService';
import {notificationHandler} from '../../NotificationHandler';
import messaging from '@react-native-firebase/messaging';
import useNavigation from '@react-navigation/native';
import {chart_lable_title} from '../utils/Colors';

const Loading = ({navigation}) => {
  const redirect = (title) => {
    console.log(title);
    navigation.navigate('NewsDetailsSlug', {
      name: title,
      id: title,
      link: title,
    });
  };

  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    notificationHandler.configure(onOpenNotification);

    function onRegister(token) {
      console.log('Token Register:', token);
    }
    function onNotification(notify) {
      try {
        console.log('onOpenNotification');
        Alert.alert('Notize', notify.notification.body, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => redirect(notify.data.slug),
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
    function onOpenNotification(notify) {
      try {
        console.log('onOpenNotification');
        Alert.alert('Notize', notify.notification.body, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => redirect(notify.data.slug),
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  useEffect(() => {
    navigation.addListener('focus', () => {
      setTimeout(() => {
        loadData();
        navigation.navigate('MainHome');
      }, 1500);
    });
  }, []);
  const loadData = async () => {
    try {
      const res = await serverRequest('/api/get_category_index');
      await AsyncStorage.setItem(
        '@' + CATEGORIES,
        JSON.stringify(res.categories),
      );
    } catch (err) {
      console.log('Categories:- ', err);
    }
  };
  // useEffect(() => {
  //   const listener = DeviceEventEmitter.addListener(
  //     'CHANGE_SCREEN',
  //     (message) => {
  //       navigation.navigate('MainHome', {
  //         message: message,
  //       });
  //     },
  //   );
  //   return () => {
  //     listener.remove();
  //   };
  // }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={backimg} style={styles.fullImage}>
        <Animatable.View animation="fadeInUp" easing="ease" delay={100}>
          <Image source={logo} style={styles.logo} />
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  fullImage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default Loading;
