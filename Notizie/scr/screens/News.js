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
  RefreshControl,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {global, colors} from '../utils';
import NewsListing from '../components/NewsListingLatest';
import serverRequest from '../helper/serverRequest';

const News = ({navigation}) => {
  const [news, setNews] = useState(null);
  const [index, setIndex] = useState(true);
  const [loading, isLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(false);
  const [category, setCategory] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    ResultData();
    setIndex(true);
  }, [index]);

  const ResultData = async () => {
    try {
      const res = await serverRequest(
        '/wp-json/wp/v2/posts?categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911&page=' +
          offset +
          '&per_page=10&orderby=date',
      );
      setNews(res);
      setOffset(offset + 1);
      setDataSource([...dataSource, ...res]);

      isLoading(false);
    } catch (error) {}
  };

  const renderItemFile = ({item}) => {
    return <NewsListing item={item} />;
  };

  const onRefresh = async () => {
    try {
      setrefreshing(true);
      try {
        const res = await serverRequest(
          '/wp-json/wp/v2/posts?categories_exclude=388152,388154,388153,388155,388156,230016,305374&post-flags_exclude=387911&page=1&per_page=10&orderby=date',
        );
        setDataSource(res);
        setOffset(2);
      } catch (err) {
        console.log('posts:- ', err);
      }
      // console.log('Data Updated');
      setrefreshing(false);
    } catch (error) {}
  };
  const renderFooter = async () => {
    await ResultData();
    return (
      //Footer View with Load More button
      <View>
        {loading ? <ActivityIndicator size="large" color="#ff0000" /> : null}
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
        <FlatList
          data={dataSource}
          extraData={dataSource}
          renderItem={renderItemFile}
          keyExtractor={(item, index) => String(item.id)}
          contentContainerStyle={{flexGrow: 1}}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
              colors={['#ff0000', '#ff0000']}
            />
          }
          onEndReached={renderFooter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default News;
