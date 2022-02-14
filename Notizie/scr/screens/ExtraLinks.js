import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import {global, colors} from '../utils';
import VideoListing from '../components/VideoListing';

const ExtraLinks = ({navigation}) => {
  const [news, setNews] = useState(null);
  const [index, setIndex] = useState(true);
  const [loading, isLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    ResultData();
    setIndex(true);
  }, [index]);

  const ResultData = async () => {
    try {
      const res = await axios.get(
        'https://api.dailymotion.com/videos?owners=x24gb6i&limit=10&page=' +
          offset,
      );
      setOffset(offset + 1);
      setDataSource([...dataSource, ...res.data.list]);

      isLoading(false);
    } catch (error) {}
  };

  const renderItemFile = ({item}) => {
    return <VideoListing item={item} />;
  };

  const onRefresh = async () => {
    try {
      setrefreshing(true);
      try {
        const res = await axios.get(
          'https://api.dailymotion.com/videos?owners=x24gb6i&limit=10&page=1',
        );
        setDataSource(res.data.list);
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
        <View>
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingVertical: 10,
  },
});

export default ExtraLinks;
