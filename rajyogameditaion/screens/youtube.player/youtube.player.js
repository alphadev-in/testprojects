import React, {useEffect, useState} from 'react';
import {View, Text, BackHandler, Alert, ActivityIndicator, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');

export default function YoutubePlayer(props) {
  const [videoId, setVideoId] = useState(false);

  useEffect(()=>{
console.log(props.route.params.id);
    
  },[])
  const onChangeFullScreen = (value) => {
    // if (!value.isFullscreen) {
    //   setVideoId(false);
      props.navigation.goBack();
    // }
  };

  useEffect(() => {
    setVideoId(props.route.params.id);
  }, [props.route.params.id]);
  return (
    <SafeAreaView style={{width:Dimensions.get('window').width, height:200, flex:1, justifyContent:'center',alignContent:'center'}}>
      
     
        <WebView 
        javaScriptEnabled={true}
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        source={{uri:'https://www.youtube.com/embed/'+ props.route.params.id}}
        
        />
        <TouchableOpacity
            onPress={() => onChangeFullScreen()}>
            <View style={{ width: '100%',
    backgroundColor: '#FF005A',
    height: 60,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',}}>
              
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#ffffff',
                }}>
                BACK
              </Text>
            </View>
          </TouchableOpacity>
    </SafeAreaView>
  );
}
