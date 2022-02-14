import {Dimensions, Linking} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
// const navigation = useNavigation();
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const app_name = 'Notizie';
const isDebug = true;
const font_family_title = 'Sarala-Regular';
const font_family_description = 'Montserrat-Regular';
const font_family_bold = 'Montserrat-Bold';

const DEFAULT_PROPS = {
  tagsStyles: {
    p: {
      fontSize: 16,
      color: 'black',
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    div: {
      fontSize: 16,
      color: 'black',
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    strong: {
      fontSize: 16,
      color: 'black',
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    li: {
      fontSize: 16,
      color: 'black',
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    ul: {
      fontSize: 16,
      color: 'black',
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    a: {
      fontSize: 16,
      color: 'red',
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    iframe: {width: windowWidth - 30, height: 200},
    h3: {
      fontSize: 20,
      color: 'black',
      paddingBottom: 10,
      paddingTop: 10,
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    h1: {
      fontSize: 20,
      color: 'black',
      paddingBottom: 10,
      paddingTop: 10,
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    h2: {
      fontSize: 20,
      color: 'black',
      paddingBottom: 10,
      paddingTop: 10,
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    h4: {
      fontSize: 20,
      color: 'black',
      paddingBottom: 10,
      paddingTop: 10,
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    h6: {
      fontSize: 20,
      color: 'black',
      paddingBottom: 10,
      paddingTop: 10,
      width: windowWidth - 30,
      fontFamily: font_family_description,
    },
    img: {width: windowWidth - 30},
  },
  onLinkPress(evt, href) {
    Linking.openURL(href);
  },
};
// const base_url = 'https://staging.notizie.it';
const base_url = 'https://www.notizie.it';
const FacebookURL = 'https://www.facebook.com/notizie.it';
const AndroidBanneradID = 'ca-app-pub-9540537309204793/6441145147';
const iOSBanneradID = 'ca-app-pub-9540537309204793/9891814309';
const WebURL = base_url;
export {
  isDebug,
  font_family_title,
  font_family_description,
  font_family_bold,
  app_name,
  base_url,
  DEFAULT_PROPS,
  FacebookURL,
  WebURL,
  AndroidBanneradID,
  iOSBanneradID,
};
