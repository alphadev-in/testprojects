import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';

export default class CreateReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrAccounts: [{}, {}],
      arrDisease: [{}, {}],
      arrAddiction: [{}, {}],
    };
  }
  getItems = (item, index) => {
    console.log(index);
    return (
      <View
        style={[styles.view, {paddingVertical: 0}]}
        key={index}
        onPress={() => {
          this.setState({modalVisible: true});
        }}>
        <View
          style={[styles.topView, {paddingHorizontal: 0, marginVertical: 0}]}>
          <View
            style={[
              {
                width: 50,
                height: 50,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              },
              s.shadow,
            ]}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: Colors.primary,
                borderRadius: 20,
              }}></View>
          </View>
          <Text style={[styles.name]}>
            Karan Prajapati
            <Text style={{fontSize: 10}}>{'\n'}ACCOUNT OWNER</Text>
          </Text>
        </View>
      </View>
    );
  };

  getAccountList = () => {
    let items = [];
    for (let a = 0; a < this.state.arrAccounts.length; a++) {
      items.push(this.getItems(this.state.arrAccounts[a], a));
    }
    return items;
  };

  getItems1 = (item, index) => {
    console.log(index);
    return (
      <View
        style={[styles.view, {paddingVertical: 0}]}
        key={index}
        onPress={() => {
          this.setState({modalVisible: true});
        }}>
        <View
          style={[styles.topView, {paddingHorizontal: 0, marginVertical: 0}]}>
          <View
            style={[
              {
                width: 50,
                height: 50,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              },
              s.shadow,
            ]}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: Colors.bgBlue,
                borderRadius: 20,
              }}></View>
          </View>
          <Text style={[styles.name]}>
            CardioMedicalData<Text style={{fontSize: 10}}>{'\n'}DISEASES</Text>
          </Text>
        </View>
      </View>
    );
  };

  getDiseaseList = () => {
    let items = [];
    for (let a = 0; a < this.state.arrDisease.length; a++) {
      items.push(this.getItems1(this.state.arrDisease[a], a));
    }
    return items;
  };

  getItems2 = (item, index) => {
    console.log(index);
    return (
      <View
        style={[styles.view, {paddingVertical: 0}]}
        key={index}
        onPress={() => {
          this.setState({modalVisible: true});
        }}>
        <View
          style={[styles.topView, {paddingHorizontal: 0, marginVertical: 0}]}>
          <View
            style={[
              {
                width: 50,
                height: 50,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              },
              s.shadow,
            ]}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: Colors.bgBlue,
                borderRadius: 20,
              }}></View>
          </View>
          <Text style={[styles.name]}>Smoking</Text>
        </View>
      </View>
    );
  };

  getAddictionList = () => {
    let items = [];
    for (let a = 0; a < this.state.arrAddiction.length; a++) {
      items.push(this.getItems2(this.state.arrAddiction[a], a));
    }
    return items;
  };

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView style={[s.container]}>
          <View style={styles.topView}>
            <Text style={[s.title]}>Create Report</Text>
            <Icon1
              name="close"
              style={{alignSelf: 'flex-end'}}
              size={30}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Report Name"
              style={styles.text}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={20}
            />
          </View>

          <View
            style={[s.view, s.shadow, {height: 120, alignItems: 'flex-start'}]}>
            <TextInput
              placeholder="Report Description"
              style={[styles.text, {height: '100%'}]}
              multiline={true}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={20}
            />
          </View>

          <Text style={[styles.title]}>Accounts</Text>
          {this.getAccountList()}
          <Text style={[styles.title]}>Diseases</Text>
          {this.getDiseaseList()}
          <Text style={[styles.title]}>Addictions</Text>
          {this.getAddictionList()}

          <TouchableOpacity style={[s.button,{marginTop: 20, marginBottom: Platform.OS == 'ios' ? 40 :  60}]}>
            <Text style={s.buttonText}>Create Report</Text>
          </TouchableOpacity>
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
  text: {
    fontFamily: Font.Medium,
    fontSize: 15,
    color: Colors.darkText,
    flex: 1,
  },
  title: {
    fontFamily: Font.Medium,
    fontSize: 16,
    color: Colors.darkText,
    marginBottom: 10,
    marginTop: 40,
    marginLeft: 30,
  },
  view: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    color: Colors.darkText,
    fontFamily: Font.Medium,
    flex: 1,
  },
});
