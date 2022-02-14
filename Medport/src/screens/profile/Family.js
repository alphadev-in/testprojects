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
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';

import * as Constants from '../../utils/globalData';
import LoaderView from '../../components/loaderView.js';
import ApiManager from '../../utils/apiManager';
import NoDataView from '../../components/noDataFoundView.js';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLoading: true,
      name: '',
    };
  }

  componentDidMount() {
    // console.log(Constants.UserObj.first_name);
    let url = Constants.BASE_URL + 'api/emergencydetails/list';
    ApiManager.getApiCAll(url, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);
        if (response.data != null) {
          let t = JSON.parse(response.data[response.data.length - 1].relations);
          this.setState({
            isLoading: false,
            arr: t,
            name: response.data[response.data.length - 1].name,
          });
        } else {
          this.setState({isLoading: false});
        }
      } else {
        this.setState({isLoading: false});
        console.log('error');
        console.log(response.message);
        let message = response.message;
        if (response.message.phone_number != null) {
          message = response.message.phone_number[0];
        }
        if (response.message.email != null) {
          message = response.message.email[0];
        }
        Alert.alert('', message);
      }
    });
  }

  getItems = (item, index) => {
    // let relation = 'relation';

    // let contact = '';
    // if (t != null) {
    //   relation = t[0].relation;
    //   contact = t[0].contact_no;
    // }
    return (
      <View
        style={[
          s.view,
          s.shadow,
          {height: 90},
          {
            marginBottom:
              index == this.state.arr.length - 1 ? 40 : 0,
          },
        ]}
        key={index}>
        <View style={{flex: 1, justifyContent: 'center', height: '100%'}}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text1}>{item.relation}</Text>
          <Text style={[styles.text1]}>{item.contact_no}</Text>
        </View>
        <Icon
          style={{color: Colors.primary, marginLeft: 8}}
          name="check-circle"
          size={30}
        />
      </View>
    );
  };

  get = () => {
    let items = [];
    for (let a = 0; a < this.state.arr.length; a++) {
      items.push(this.getItems(this.state.arr[a], a));
    }
    return items;
  };

  render() {
    if (this.state.isLoading) {
      return <LoaderView />;
    }

    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView style={[s.container]}>
          <View style={styles.topView}>
            <Icon
              size={20}
              onPress={() => this.props.navigation.goBack()}
              name={Platform.OS == 'ios' ? 'arrow-back-ios' : 'arrow-back'}
            />
            <Text style={[s.title]}>Family</Text>
          </View>

          <Icon1
            name="pluscircle"
            size={30}
            color={Colors.primary}
            style={styles.plus}
            onPress={() => {
              this.props.navigation.navigate('AddFamily', {
                relations: this.state.arr,
                name: this.state.name,
              });
            }}
          />

          {this.state.arr.length == 0 ? (
            <NoDataView title="No family details Found" />
          ) : (
            this.get()
          )}
        </ScrollView>
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
  plus: {
    marginRight: 20,
    alignSelf: 'flex-end',
    marginVertical: 20,
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 16,
    color: Colors.darkText,
    // flex: 1,
  },
  text1: {
    fontFamily: Font.Medium,
    fontSize: 10,
    color: Colors.placeHolderText,
    // flex: 1,
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
