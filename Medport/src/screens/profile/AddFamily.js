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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import DropDownPicker from 'react-native-dropdown-picker';
import * as Constants from '../../utils/globalData';
import LoaderView from '../../components/loaderView.js';
import ApiManager from '../../utils/apiManager';
import NoDataView from '../../components/noDataFoundView.js';

export default class AddFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRelation: null,
      name: '',
      relation: '',
      contact: '',
      isLoading: false,
      arrRelation: this.props.route.params.relations
        ? this.props.route.params.relations
        : [],
    };
    // console.log(this.props.route.params);
  }

  addMember = () => {
    if (this.state.name.trim().length == 0) {
      Alert.alert('', 'Please enter name');
      return;
    }
    if (this.state.relation.trim().length == 0) {
      Alert.alert('', 'Please enter relation');
      return;
    }
    if (this.state.contact.trim().length == 0) {
      Alert.alert('', 'Please enter contact number');
      return;
    }
    if (isNaN(this.state.contact.trim())) {
      Alert.alert('', 'Please enter valid contact number');
      return;
    }
    let arr = this.state.arrRelation;
    arr.push({
      relation: this.state.relation.trim(),
      name: this.state.name.trim(),
      contact_no: this.state.contact.trim(),
    });
    let params = {
      name: this.props.route.params.name
      ? this.props.route.params.name
      : '',
      relations: arr,
    };
    let url = Constants.BASE_URL + 'api/emergencydetails/save';
    this.setState({isLoading: true});
    ApiManager.postApiCall(url, params, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);
        Alert.alert('', 'Family member added!!');
        this.props.navigation.goBack();
        // Constants.UserObj = response.data.userDetails[0];
        // Constants.Token = response.data.token;
        // this.test(Constants.Token, Constants.UserObj);
      } else {
        this.setState({isLoading: false});
        console.log('error');
        console.log(response.message);
        let message = response.message;
        Alert.alert('', message);
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView style={[s.container]}>
          <View style={styles.topView}>
            <Text style={[s.title]}>Add Family</Text>
            <Icon1
              size={20}
              onPress={() => this.props.navigation.goBack()}
              name="close"
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              style={styles.text}
              placeholder="Name"
              value={this.state.name}
              onChangeText={(text) => {
                this.setState({name: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.name.length == 0 ? 0.3 : 1.0,
              }}
              name="check-circle"
              size={30}
            />
          </View>

          {/* <View
            style={[
              s.shadow,
              {zIndex: 1, marginHorizontal: 20, marginTop: 20},
            ]}>
            <DropDownPicker
              items={[
                {label: 'Relation 1', value: '1'},
                {label: 'Relation 2', value: '2'},
              ]}
              defaultValue={this.state.country}
              containerStyle={{height: 70}}
              style={[{borderWidth: 0, flex: 1, borderRadius: 20}, s.shadow]}
              placeholder="Select Relation"
              placeholderStyle={[styles.text, {color: Colors.placeHolderText}]}
              labelStyle={styles.text}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: 'white'}}
              onChangeItem={(item) => {
                this.setState({
                  selectedLang: item.value,
                });
                // this.props.navigation.navigate('GetStarted');
              }}
            />
          </View> */}

          <View style={[s.view, s.shadow]}>
            <TextInput
              style={styles.text}
              placeholder="Relation"
              value={this.state.relation}
              onChangeText={(text) => {
                this.setState({relation: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.relation.length == 0 ? 0.3 : 1.0,
              }}
              name="check-circle"
              size={30}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              style={styles.text}
              placeholder="Contact Number"
              keyboardType="phone-pad"
              value={this.state.contact}
              onChangeText={(text) => {
                this.setState({contact: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.contact.length == 0 ? 0.3 : 1.0,
              }}
              name="check-circle"
              size={30}
            />
          </View>

          <TouchableOpacity
            style={[s.button, {marginTop: 40}]}
            onPress={() => {
              this.addMember();
            }}>
            <Text style={[s.buttonText]}>Add</Text>
          </TouchableOpacity>
        </ScrollView>
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
