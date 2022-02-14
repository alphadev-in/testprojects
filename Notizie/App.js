import React, {useEffect, useState} from 'react';
import configureStore from './scr/store';
import axios from 'axios';
import {global} from './scr/utils';
import {LogBox, Alert, NativeModules} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './scr/AppNavigator';
import {fcmService} from './FCMService';
import {notificationHandler} from './NotificationHandler';
import messaging from '@react-native-firebase/messaging';
const store = configureStore();
LogBox.ignoreAllLogs();
import useNavigation from '@react-navigation/native';

const App = () => {
  axios.defaults.baseURL = global.base_url;
  // const eventEmitter = new NativeEventEmitter(
  //   NativeModules.NielsenAppApiBridge,
  // );
  // let appInformation = {
  //   appid: 'P224706AB-0CCD-4B9F-9485-52B780CDBB27',
  //   intType: 'r',
  //   // Remove Flag:   "nol_devDebug": "DEBUG"
  // };
  // NativeModules.NielsenAppApiBridge.createInstance(appInformation);
  // var initListner = eventEmitter.addListener('EVENT_INIT', (data) => {
  //   sdk_id = data.id;
  //   console.log('SDK initialized with id :' + data.id);
  // });
  // var optoutUrlListner = eventEmitter.addListener(
  //   'EVENT_OPTOUT_URL',
  //   (data) => {
  //     console.log('EVENT_OPTOUT_URL :' + data.optouturl);
  //   },
  // );
  // var optoutStatusListner = eventEmitter.addListener(
  //   'EVENT_OPTOUT_STATUS',
  //   (data) => {
  //     console.log('EVENT_OPTOUT_STATUS :' + data.user_optout);
  //   },
  // );
  // var demographicIdListner = eventEmitter.addListener(
  //   'EVENT_DEMOGRAPHIC_ID',
  //   (data) => {
  //     console.log('EVENT_DEMOGRAPHIC_ID :' + data.demographic_id);
  //   },
  // );
  // var meterVersionListner = eventEmitter.addListener(
  //   'EVENT_METER_VERSION',
  //   (data) => {
  //     console.log('EVENT_METER_VERSION :' + data.meter_version);
  //   },
  // );
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
