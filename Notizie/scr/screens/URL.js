import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
const URL = ({route, navigation}) => {
  const {url} = route.params;
  const [data, setData] = useState(true);
  const hideSpinner = () => {
    setData(false);
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        onLoad={() => hideSpinner()}
        style={{flex: 1}}
        source={{uri: url}}
      />
      {data && (
        <ActivityIndicator
          style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0}}
          size="large"
          color={'red'}
        />
      )}
    </View>
  );
};

export default URL;
