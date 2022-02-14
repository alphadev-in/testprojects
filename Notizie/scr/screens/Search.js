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
import {global, colors} from '../utils';
import SearchListing from '../components/SearchListing';
import serverRequest from '../helper/serverRequest';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = wp('100%');
const windowHeight = hp('100%');

const Search = ({navigation}) => {
  const [news, setNews] = useState('');
  const [loading, isLoading] = useState(false);
  const [lengthData, setlengthData] = useState();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // submitSearch();
  }, []);

  const submitSearch = async () => {
    try {
      isLoading(true);
      const res = await serverRequest(
        '/wp-json/wp/v2/search?search=' + news + '&per_page=6',
      );
      setDataSource(res);
      const length = res.length;
      setlengthData(length);
      isLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItemFile = ({item}) => {
    return <SearchListing item={item} lengthData={lengthData} />;
  };

  renderEmpty = () => {
    return (
      <View style={styles.container_empty}>
        <Ionicons
          name={'newspaper-outline'}
          size={120}
          color={'#cdcdcd'}
          style={styles.file_search_ic}
        />
        <View style={styles.divider} />
        <Text style={styles.list_empty_title}>Nessun risultato trovato.</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          placeholder={'Cerca tra le news'}
          value={news}
          style={styles.textBoxStyle}
          onChangeText={(text) => setNews(text)}
          keyboardType="web-search"
          onSubmitEditing={() => submitSearch()}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: 10,
            width: (windowWidth * 1) / 4 - 20,
            borderRadius: 10,
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}
          onPress={() => submitSearch()}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              fontFamily: global.font_family_description,
            }}>
            Cerca
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 20}}>
        {loading ? (
          <ActivityIndicator size="large" color="#ff0000" />
        ) : (
          <FlatList
            data={dataSource}
            extraData={dataSource}
            renderItem={renderItemFile}
            keyExtractor={(item, index) => String(item.id)}
            contentContainerStyle={{flexGrow: 1}}
            ListEmptyComponent={renderEmpty()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
    height: (windowHeight * 2) / 3,
  },
  divider: {
    marginVertical: 20,
  },
  list_empty_title: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    fontFamily: global.font_family_title,
    fontStyle: 'italic',
  },
  file_search_ic: {
    alignSelf: 'center',
  },
});

export default Search;
