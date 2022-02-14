import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
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
import NewsListing from '../components/NewsListing';
import serverRequest from '../helper/serverRequest';
import GoogleAds from '../components/GoogleAds';

const CategoryMain = ({route, navigation}) => {
  const [news, setNews] = useState(null);
  const [index, setIndex] = useState(true);
  const [loading, isLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(false);
  const [category, setCategory] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);
  const {id, name} = route.params;
  useEffect(() => {
    ResultData();
    setIndex(true);
  }, [index]);

  const ResultData = async () => {
    try {
      const res = await serverRequest(
        '/wp-json/wp/v2/posts?page=' + offset + '&per_page=10&categories=' + id,
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
          '/wp-json/wp/v2/posts?page=1&per_page=10&categories=' + id,
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
        {loading ? (
          <ActivityIndicator color="red" style={{marginLeft: 8}} />
        ) : null}
      </View>
    );
  };
  const footer = () => {
    return (
      <View>
        <GoogleAds />
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
          ListFooterComponent={footer}
          ListHeaderComponent={footer}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
});

export default CategoryMain;
