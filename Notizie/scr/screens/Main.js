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
  Alert,
  ActivityIndicator,
  SectionList,
  RefreshControl,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {global, colors} from '../utils';
import NewsListing from '../components/NewsListing';
import NewsListing2 from '../components/NewsListing2';
import NewsListing3 from '../components/NewsListing3';
import NewsListing4 from '../components/NewsListing4';
import NewsListing5 from '../components/NewsListing5';
import serverRequest from '../helper/serverRequest';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');
import GoogleAds from '../components/GoogleAds';
import Outbrain from '../components/Outbrain';

const Main = ({navigation}) => {
  const [news, setNews] = useState(null);
  const [index, setIndex] = useState(true);
  const [loading, isLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [arrayData, setarrayData] = useState([]);
  const [firstData, setfirstData] = useState([]);
  const [dataSource2, setDataSource2] = useState([]);
  const [dataSource3, setDataSource3] = useState([]);
  const [dataSource4, setDataSource4] = useState([]);
  const [dataSource5, setDataSource5] = useState([]);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [dataMed, setdataMed] = useState([]);
  const [dataMed1, setdataMed1] = useState([]);
  const [dataMed2, setdataMed2] = useState([]);
  const [dataMed3, setdataMed3] = useState([]);
  const [dataMed4, setdataMed4] = useState([]);

  useEffect(() => {
    setDataSource([]);
    setDataSource2([]);
    setDataSource3([]);
    setDataSource4([]);
    setDataSource5([]);
    ResultData();
    setIndex(true);
    console.log('call');
  }, []);

  const removeDuplicates = async (data) => {
    const newArray = [];
    data.forEach((obj) => {
      if (!newArray.some((o) => o.id === obj.id)) {
        newArray.push({...obj});
      }
    });
    return newArray;
  };
  const ResultData = async () => {
    try {
      isLoading(true);
      setDataSource([]);
      setDataSource2([]);
      setDataSource3([]);
      setDataSource4([]);
      setDataSource5(arrayData);
      let res = await serverRequest(
        '/wp-json/wp/v2/posts?post-flags=386631&per_page=1&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setfirstData(res);
      res = await serverRequest(
        '/wp-json/wp/v2/posts?post-flags=217695&per_page=5&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setDataSource(res);
      /////
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=91&per_page=1&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setData(res);
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=91&per_page=5&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911&offset=1',
      );
      setDataSource2(res);

      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=1&per_page=5&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setdataMed(res);

      /////
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=90&per_page=1&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setData1(res);
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=90&per_page=5&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911&offset=1',
      );
      setDataSource3(res);
      setDataSource3([...dataSource3, ...res]);

      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=71&per_page=5&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setdataMed1(res);

      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=75&per_page=3&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setdataMed2(res);
      /////
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=99&per_page=1&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setData2(res);
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=99&per_page=5&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911&offset=1',
      );
      setDataSource4(res);

      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=9&per_page=3&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setdataMed3(res);

      /////
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=386616&per_page=1&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911',
      );
      setData3(res);
      res = await serverRequest(
        '/wp-json/wp/v2/posts?categories=386616&per_page=4&categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911&offset=1',
      );
      setDataSource5(res);

      isLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItemFile = ({item}) => {
    return <NewsListing item={item} />;
  };
  const renderItemFile2 = ({item}) => {
    return <NewsListing2 item={item} />;
  };
  const renderItemFile3 = ({item}) => {
    return <NewsListing3 item={item} />;
  };
  const renderItemFile4 = ({item}) => {
    return <NewsListing4 item={item} />;
  };
  const renderItemFile5 = ({item}) => {
    return <NewsListing5 item={item} />;
  };

  const onRefresh = async () => {
    try {
      // setrefreshing(true);
      try {
        await ResultData();
      } catch (err) {
        console.log('posts:- ', err);
      }
      // console.log('Data Updated');
      // setrefreshing(false);
    } catch (error) {}
  };
  const renderFooter = async () => {
    // await ResultData();
    return (
      //Footer View with Load More button
      <View>
        {loading ? (
          <ActivityIndicator color="red" style={{marginLeft: 8}} />
        ) : null}
      </View>
    );
  };
  const renderEmpty = () => {
    return (
      <View style={styles.container_empty}>
        <Ionicons
          name={'alarm'}
          size={100}
          color={'#cdcdcd'}
          style={styles.file_search_ic}
        />
        <View style={styles.divider} />
        <Text style={styles.list_empty_title}>Nessun risultato trovato.</Text>
      </View>
    );
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
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#ff0000" />
        </View>
      ) : (
        <View>
          <ScrollView
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={refreshing}
                onRefresh={() => onRefresh()}
                colors={['#ff0000', '#ff0000']}
              />
            }>
            <View>
              <FlatList
                data={firstData}
                extraData={firstData}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                ListFooterComponent={footer}
                ListHeaderComponent={footer}
                contentContainerStyle={{flexGrow: 1}}
              />
              <FlatList
                data={dataSource}
                extraData={dataSource}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                ListFooterComponent={footer}
                ListHeaderComponent={footer}
                contentContainerStyle={{flexGrow: 1}}
              />
            </View>
            <View style={{backgroundColor: '#F9C74F'}}>
              <Text
                style={{
                  fontSize: 25,
                  width: windowWidth,
                  fontWeight: 'bold',
                  padding: 5,
                  color: '#fff',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Cronaca
              </Text>
              <FlatList
                data={data}
                extraData={data}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
              />
              <FlatList
                data={dataSource2}
                extraData={dataSource2}
                renderItem={renderItemFile2}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
                horizontal={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View>
              <FlatList
                data={dataMed}
                extraData={dataMed}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                ListFooterComponent={footer}
                ListHeaderComponent={footer}
                contentContainerStyle={{flexGrow: 1}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#F94144',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  width: windowWidth,
                  fontWeight: 'bold',
                  padding: 5,
                  color: '#fff',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Economia News
              </Text>
              <FlatList
                data={data1}
                extraData={data1}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
              />
              <FlatList
                data={dataSource3}
                extraData={dataSource3}
                renderItem={renderItemFile3}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
                horizontal={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View>
              <FlatList
                data={dataMed1}
                extraData={dataMed1}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                ListFooterComponent={footer}
                ListHeaderComponent={footer}
                contentContainerStyle={{flexGrow: 1}}
              />
            </View>
            <View>
              <FlatList
                data={dataMed2}
                extraData={dataMed2}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                ListFooterComponent={footer}
                ListHeaderComponent={footer}
                contentContainerStyle={{flexGrow: 1}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#43AA8B',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  width: windowWidth,
                  fontWeight: 'bold',
                  padding: 5,
                  color: '#fff',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Salute e benessere
              </Text>
              <FlatList
                data={data2}
                extraData={data2}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
              />
              <FlatList
                data={dataSource4}
                extraData={dataSource4}
                renderItem={renderItemFile4}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
                horizontal={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View>
              <FlatList
                data={dataMed3}
                extraData={dataMed3}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                ListFooterComponent={footer}
                ListHeaderComponent={footer}
                contentContainerStyle={{flexGrow: 1}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#0267C1',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  width: windowWidth,
                  fontWeight: 'bold',
                  padding: 5,
                  color: '#fff',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Offerte & Consigli
              </Text>
              <FlatList
                data={data3}
                extraData={data3}
                renderItem={renderItemFile}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
              />
              <FlatList
                data={dataSource5}
                extraData={dataSource5}
                renderItem={renderItemFile5}
                keyExtractor={(item, index) => String(index + item.id)}
                contentContainerStyle={{flexGrow: 1}}
                horizontal={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  input_ic: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  textBoxStyle: {
    width: (windowWidth * 3) / 4,
  },
  input_container: {
    paddingLeft: 10,
    flexDirection: 'row',
    borderColor: '#dfdfdf',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    fontFamily: global.font_family_description,
    borderRadius: 10,
  },
  container_empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  divider: {
    marginVertical: 20,
  },
  list_empty_title: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    fontFamily: global.font_family_title,
    fontStyle: 'italic',
  },
  file_search_ic: {
    alignSelf: 'center',
  },
});

export default Main;
