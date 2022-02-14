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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import DropDownPicker from 'react-native-dropdown-picker';

export default class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRelation: null,
      isLoading: false,
      name: '',
      relation: '',
      contact: '',
      email: '',
    };
  }

  add = () => {
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
    if (
      this.state.email.trim().length == 0 ||
      !Utils.isValidEmail(this.state.email.trim())
    ) {
      Alert.alert('', 'Please enter valid email');
      return;
    }
  };

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView style={[s.container]}>
          <View style={styles.topView}>
            <Text style={[s.title]}>Add Group</Text>
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
              onChangeText={(text) => this.setState({name: text})}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.name.trim().length > 0 ? 1.0 : 0.3,
              }}
              name="check-circle"
              size={30}
            />
          </View>

          {/* <View style={[ s.shadow, {zIndex: 1, marginHorizontal: 20, marginTop:20}]}>
           
            <DropDownPicker
              items={[{label: 'Relation 1', value: '1'},{label: 'Relation 2', value: '2'}]}
              defaultValue={this.state.country}
              containerStyle={{height: 70}}
              style={[{borderWidth: 0, flex:1, borderRadius:20}, s.shadow]}
              placeholder="Select Relation"
              placeholderStyle={[styles.text, { color:Colors.placeHolderText}]}
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
                opacity: this.state.relation.trim().length > 0 ? 1.0 : 0.3,
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
                opacity: this.state.contact.trim().length > 0 ? 1.0 : 0.3,
              }}
              name="check-circle"
              size={30}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              style={styles.text}
              placeholder="Email Address"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(text) => {
                this.setState({email: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.email.trim().length > 0 ? 1.0 : 0.3,
              }}
              name="check-circle"
              size={30}
            />
          </View>

          <TouchableOpacity style={[s.button, {marginTop: 40}]} onPress={()=> this.add()} >
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
