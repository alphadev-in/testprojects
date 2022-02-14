import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import backimg from '../assets/img/backimg.png';
import logo from '../assets/img/logo.png';
import {global, colors} from '../utils';
import Moment from 'moment';
import {useNavigation} from '@react-navigation/native';
const Entities = require('html-entities').AllHtmlEntities;
import HTML from 'react-native-render-html';
import serverRequest from '../helper/serverRequest';
import CatChecker from '../helper/CatChecker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
import {WebView} from 'react-native-webview';
import NewsListingLatest from '../components/NewsListingLatest';
import GoogleAds from '../components/GoogleAds';
import Outbrain from '../components/Outbrain';
const NewsDetails2 = ({route, navigation}) => {
  const {name, id, link} = route.params;
  const [content, setContent] = useState();
  const [author, setauthor] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [dataSource, setDataSource] = useState([]);
  const [categories, setCategories] = useState();
  const [loading, isLoading] = useState(true);
  const navigation2 = useNavigation();
  const DEFAULT_PROPS = {
    tagsStyles: {
      b: {
        fontSize: 16,
        color: 'black',
        width: windowWidth - 30,
        fontFamily: global.font_family_description,
        fontWeight: '200',
        lineHeight: 23,
      },
      strong: {
        fontSize: 16,
        color: 'black',
        width: windowWidth - 30,
        fontFamily: global.font_family_description,
        fontWeight: '200',
        lineHeight: 23,
      },
      em: {
        fontSize: 16,
        color: 'black',
        width: windowWidth - 30,
        fontFamily: global.font_family_description,
        fontWeight: '200',
        lineHeight: 23,
        fontStyle: 'normal',
      },
      p: {
        fontSize: 16,
        color: 'black',
        width: windowWidth - 30,
        fontFamily: global.font_family_description,
        marginTop: 10,
        lineHeight: 23,
        fontWeight: '200',
      },
      div: {
        fontSize: 16,
        color: 'black',
        width: windowWidth - 30,
        fontFamily: global.font_family_description,
        lineHeight: 23,
        fontWeight: '200',
      },
      li: {
        fontSize: 16,
        color: 'black',
        width: windowWidth - 80,
        fontFamily: global.font_family_description,
        lineHeight: 23,
        fontWeight: '200',
        listStyleType: 'none',
        textDecoration: 'none',
      },
      ul: {
        fontSize: 16,
        color: 'black',
        fontWeight: '200',
        width: windowWidth - 80,
        fontFamily: global.font_family_description,
        marginTop: 10,
        marginBottom: -5,
        lineHeight: 23,
        listStyleType: 'none',
        textDecoration: 'none',
        marginLeft: -10,
      },
      a: {
        fontSize: 16,
        color: 'red',
        width: windowWidth - 30,
        fontFamily: global.font_family_bold,
        lineHeight: 23,
        textDecorationLine: 'none',
      },
      iframe: {width: windowWidth - 30, height: 200},
      h3: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
        marginTop: 20,
        width: windowWidth - 30,
        fontFamily: global.font_family_title,
        fontWeight: '600',
        lineHeight: 23,
      },
      h1: {
        fontSize: 24,
        color: 'black',
        marginBottom: 10,
        marginTop: 20,
        width: windowWidth - 30,
        fontFamily: global.font_family_title,
        fontWeight: '600',
        lineHeight: 23,
      },
      h2: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
        marginTop: 20,
        width: windowWidth - 30,
        fontFamily: global.font_family_title,
        fontWeight: '600',
        lineHeight: 23,
      },
      h4: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
        marginTop: 20,
        width: windowWidth - 30,
        fontFamily: global.font_family_title,
        fontWeight: '600',
        lineHeight: 23,
      },
      h5: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
        marginTop: 20,
        width: windowWidth - 30,
        fontFamily: global.font_family_title,
        fontWeight: '600',
        lineHeight: 23,
      },
      h6: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
        marginTop: 20,
        width: windowWidth - 30,
        fontFamily: global.font_family_title,
        fontWeight: '600',
        lineHeight: 23,
      },
      img: {width: windowWidth - 30},
    },

    classesStyles: {
      'twitter-tweet': {
        textAlign: 'center',
        color: '#1da1f2',
        fontStyle: 'italic',
        paddingBottom: 10,
        paddingTop: 10,
        fontFamily: global.font_family_description,
        fontSize: 16,
      },
    },
  };

  useEffect(() => {
    ResultData();
  }, []);
  const renderItem = ({item}) => {
    return <NewsListingLatest item={item} />;
  };
  const checkOnPressEvent = (event, href, slug) => {
    try {
      console.log(href);
      const dataCheck = href.includes('https://www.notizie.it');
      if (dataCheck === true) {
        console.log(slug.slug);
        const slugData = slug.slug;
        const replaceData = slugData.replace(/[^a-zA-Z0-9 ]/g, ' ');
        const finalData =
          replaceData.charAt(0).toUpperCase() + replaceData.slice(1);
        console.log(finalData);
        navigation2.navigate('NewsDetailsSlug', {
          name: finalData,
          id: slugData,
          link: href,
        });
      } else {
        navigation2.navigate('URL', {
          url: href,
        });
      }
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  };
  const ResultData = async () => {
    try {
      const item = await serverRequest('/wp-json/wp/v2/posts/' + id);
      // console.log(item);
      setContent(item.content.rendered);
      // console.log(content);
      setImage(item.featured_image_urls.medium_large);
      setDate(Moment(item.date).format('DD-MM-YYYY'));
      setCategories(item.categories[0]);

      let resAuthor = await serverRequest(
        '/wp-json/wp/v2/users/' + item.author,
      );
      setauthor(resAuthor.name);

      let res = await serverRequest(
        'wp-json/wp/v2/posts?categories=' +
          item.categories[0] +
          '&per_page=4&exclude[]=' +
          item.id,
      );
      setDataSource(res);
      isLoading(false);
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  };
  let categoryType = CatChecker(categories);
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#ff0000" />
        </View>
      ) : (
        <ScrollView style={{paddingVertical: 15, paddingHorizontal: 15}}>
          <Image source={{uri: image}} style={styles.image} />
          <Text
            style={{
              backgroundColor: 'red',
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
              borderRadius: 5,
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              color: 'white',
              fontFamily: global.font_family_description,
            }}>
            {categoryType}
          </Text>
          <Text style={styles.text}>{name}</Text>
          <View style={{width: wp('100%') - 30}}>
            <GoogleAds />
            <Outbrain />
          </View>
          <HTML
            html={content.replace(/<[/]strong>/g, ' ')}
            {...DEFAULT_PROPS}
            ignoredStyles={['height', 'width']}
            imagesMaxWidth={wp('100%') - 30}
            style={{width: windowWidth - 30}}
            contentWidth={windowWidth - 30}
            onLinkPress={(event, href, slug) => {
              checkOnPressEvent(event, href, slug);
            }}
            staticContentMaxWidth={wp('100%') - 30}
            renderers={{
              iframe: (
                htmlAttribs,
                children,
                convertedCSSStyles,
                passProps,
              ) => {
                // console.log(htmlAttribs);
                return (
                  <View
                    key={passProps.key}
                    style={{
                      width: '100%',
                      aspectRatio: 16.0 / 9.0,
                      marginTop: 16,
                      marginBottom: 16,
                    }}>
                    <WebView
                      scrollEnabled={false}
                      source={{uri: htmlAttribs.src}}
                      style={{flex: 1, width: '100%', aspectRatio: 16.0 / 9.0}}
                    />
                  </View>
                );
              },
              video: (htmlAttribs, children, convertedCSSStyles, passProps) => {
                return (
                  <View
                    key={passProps.key}
                    style={{
                      width: '100%',
                      aspectRatio: 16.0 / 9.0,
                      marginTop: 16,
                      marginBottom: 16,
                    }}>
                    <WebView
                      javaScriptEnabled={true}
                      scrollEnabled={false}
                      allowsFullscreenVideo={true}
                      source={{uri: htmlAttribs.src}}
                      style={{flex: 1, width: '100%', aspectRatio: 16.0 / 9.0}}
                    />
                  </View>
                );
              },
            }}
          />
          <View style={{width: wp('100%') - 30}}>
            <GoogleAds />
            <Outbrain />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textDate}>{date}</Text>
            <Text style={styles.textDateR}>{author}</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <FlatList
              data={dataSource}
              extraData={dataSource}
              renderItem={renderItem}
              keyExtractor={(item, index) => String(index + item.id)}
              contentContainerStyle={{flexGrow: 1}}
            />
          </View>
          <View
            style={{
              marginBottom: 30,
              width: wp('100%') - 30,
            }}>
            <Outbrain />
            <GoogleAds />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    backgroundColor: colors.light,
  },
  text: {
    color: colors.text_secondary,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    fontFamily: global.font_family_title,
  },
  textDate: {
    flex: 0.5,
    color: 'gray',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    paddingTop: 10,
    fontFamily: global.font_family_title,
  },
  textDateR: {
    flex: 0.5,
    color: 'gray',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    paddingTop: 10,
    fontFamily: global.font_family_title,
    textAlign: 'right',
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    overflow: 'hidden',
    marginBottom: 10,
  },
});
export default NewsDetails2;
