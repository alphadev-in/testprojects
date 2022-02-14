import * as React from 'react';
import {View, StyleSheet, Image, SafeAreaView, Text, Alert} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import ApiManager from '../../utils/apiManager';
import DropDownPicker from 'react-native-dropdown-picker';
import LoaderView from '../../components/loaderView.js';
import * as Constants from '../../utils/globalData';

export default class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: null,
      arrLang: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    let url = Constants.BASE_URL + 'language/list';
    ApiManager.getApiCAll(url, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);
        let arr = response.data;
        var lan = [];
        for (let i = 0; i < arr.length; i++) {
          let obj = {
            label: arr[i].language_name,
            value: arr[i].id,
          };
          lan.push(obj);
        }

        this.setState({isLoading: false, arrLang: lan});
      } else {
        this.setState({isLoading: false});
        console.log('error');
        console.log(response.message);
        Alert.alert('', response.message);
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <View
          style={[
            s.container,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/mediport.png')}
          />
          <Text style={[s.title, {textAlign: 'center'}]}>
            This is Mediport{'\n'}Welcome!
          </Text>
          <Text style={styles.subTitle}>A health advanced report system</Text>
        </View>
        <View style={styles.dropDown}>
          <DropDownPicker
            items={this.state.arrLang}
            defaultValue={this.state.country}
            containerStyle={{height: 60}}
            style={[{borderWidth: 0}, s.shadow]}
            placeholder="Select Language"
            placeholderStyle={[styles.text, {opacity: 0.1}]}
            labelStyle={styles.text}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: 'white'}}
            onChangeItem={(item) => {
              this.setState({
                selectedLang: item.value,
              });
              Constants.LangId = item.value;
              this.props.navigation.navigate('Login');
            }}
          />
        </View>
        {this.state.isLoading ? <LoaderView></LoaderView> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  dropDown: {
    marginBottom: 100,
    marginHorizontal: 20,
  },
  subTitle: {
    fontFamily: Font.Medium,
    fontSize: 13,
    color: Colors.primary,
    marginTop: 12,
    textAlign: 'center',
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 15,
    color: Colors.darkText,
  },
});
