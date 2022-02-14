import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import * as Constants from '../../utils/globalData';
import ApiManager from '../../utils/apiManager';
import Utils from '../../utils/utils';
import LoaderView from '../../components/loaderView.js';
import NoDataView from '../../components/noDataFoundView.js';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // this._unsubscribe = this.props.navigation.addListener('focus', () => {
    //   // do something
    //   this.setState({isLoading: true});
    //   let url = Constants.BASE_URL + 'api/group/list';
    //   console.log('token=' + Constants.Token);
    //   ApiManager.getApiCAll(url, (response) => {
    //     if (response.isSuccess) {
    //       console.log('success');
    //       console.log(response.data);
    //       let arr = response.data;
    //       this.setState({isLoading: false, arr: arr});
    //     } else {
    //       this.setState({isLoading: false});
    //       console.log('error');
    //       console.log(response.message);
    //       Alert.alert('', response.message);
    //     }
    //   });
    // });

    let url = Constants.BASE_URL + 'api/group/list';
    // console.log('token=' + Constants.Token);
    ApiManager.getApiCAll(url, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);
        let arr1 = response.data;
        this.setState({isLoading: false, arr: arr1});
      } else {
        this.setState({isLoading: false});
        console.log('error');
        console.log(response.message);
        Alert.alert('', response.message);
      }
    });
  }

  componentWillUnmount() {
    // this._unsubscribe();
  }

  getItems = (item, index) => {
    if (item.status != 1) {
      return (
        <View
          key={index}
          style={[
            s.view,
            s.shadow,
            {
              height: 160,
              flexDirection: 'column',
              marginBottom: 80,
              marginBottom: index == this.state.arr.length - 1 ? 40 : 0,
            },
          ]}>
          <View style={{flexDirection: 'row', height: 80, paddingVertical: 15}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text1}>{item.description}</Text>
            </View>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={30}
            />
          </View>
          <TouchableOpacity style={s.button}>
            <Text style={[styles.text, {flex: 0}]}>Request sent</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={[
            s.view,
            s.shadow,
            {
              height: 80,
              marginBottom: index == this.state.arr.length - 1 ? 40 : 0,
            },
          ]}
          key={index}>
          <View style={{flex: 1, justifyContent: 'center', height: '100%'}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text1}>{item.description}</Text>
          </View>
          <Icon
            style={{color: Colors.primary, marginLeft: 8}}
            name="check-circle"
            size={30}
          />
        </View>
      );
    }
  };

  get = () => {
    let items = [];
    for (let a = 0; a < this.state.arr.length; a++) {
      items.push(this.getItems(this.state.arr[a], a));
    }
    return items;
  };

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <View style={styles.topView}>
          <Icon
            size={20}
            onPress={() => this.props.navigation.goBack()}
            name={Platform.OS == 'ios' ? 'arrow-back-ios' : 'arrow-back'}
          />
          <Text style={[s.title]}>Group</Text>
        </View>
        {this.state.isLoading ? null : (
          <>
            {this.state.arr.length == 0 ? (
              <NoDataView title="No Group Found" />
            ) : (
              <ScrollView style={[s.container]}>{this.get()}</ScrollView>
            )}
          </>
        )}

        <Icon1
          name="pluscircle"
          size={40}
          color={Colors.primary}
          style={s.bottomFloatingButton}
          onPress={() => {
            this.props.navigation.navigate('AddGroup');
          }}
        />
        {this.state.isLoading ? <LoaderView /> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 16,
    color: Colors.darkText,
    flex: 1,
  },
  text1: {
    fontFamily: Font.Medium,
    fontSize: 10,
    color: Colors.placeHolderText,
    flex: 1,
    marginTop: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'contain',
  },
  buttonText: {
    fontFamily: Font.Medium,
    fontSize: 15,
    color: 'white',
  },
});
