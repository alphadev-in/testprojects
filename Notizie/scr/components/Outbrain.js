import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
export default function Outbrain(props) {
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
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: windowWidth,
      }}>
      <WebView
        source={{
          html:
            '<div class="OUTBRAIN" data-src="http://www.notizie.it/article-url" data-widget-id="MB_10" data-ob-installation-type="app_js_widget" data-ob-user-id="EA7583CD-A667-48BC-B806-42ECB2B48606" data-ob-app-ver="1" data-ob-installation-key="ITNOTEQ1GNI2FHNJEN86C65LF"></div><script type="text/javascript" async="async" src="https://widgets.outbrain.com/outbrain.js"></script>',
        }}
        javaScriptEnabled={true}
        scrollEnabled={false}
        style={{
          width: windowWidth,
          height: 300,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}
