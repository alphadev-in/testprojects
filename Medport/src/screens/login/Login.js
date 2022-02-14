import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import ApiManager from '../../utils/apiManager';
import Utils from '../../utils/utils';
import LoaderView from '../../components/loaderView.js';
import * as Constants from '../../utils/globalData';

const windowHeight = Dimensions.get('window').height;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      passwordSecure: true,
    };
  }

  async signIn() {
    if (
      this.state.email.trim().length == 0 ||
      !Utils.isValidEmail(this.state.email.trim())
    ) {
      Alert.alert('', 'Please enter valid email');
      return;
    }
    if (this.state.password.trim().length == 0) {
      Alert.alert('', 'Please enter password');
      return;
    }
    let params = {
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      device_id: Constants.DeviceId,
    };
    let url = Constants.BASE_URL + 'login';
    this.setState({isLoading: true});

    ApiManager.postApiCall(url, params, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);
        Constants.UserObj = response.data.userDetails[0];
        Constants.Token = response.data.token;
        this.test(Constants.Token, Constants.UserObj);
      } else {
        this.setState({isLoading: false});
        console.log('error');
        console.log(response.message);
        let message = response.message;
        Alert.alert('', message);
      }
    });
  }

  async test(token, obj) {
    await Utils.storeData('isLogin', 'true');
    await Utils.storeData('token', token);
    await Utils.storeObj('userObj', obj);

    this.setState({isLoading: false});
    this.props.navigation.navigate('Tab');
  }

  render() {
    return (
      <SafeAreaView style={s.container}>
        <ScrollView
          style={[
            s.container,
            {backgroundColor: 'white', maxHeight: windowHeight - 24},
          ]}>
          <View style={styles.topView}>
            <Icon
              style={{marginLeft: 20}}
              size={20}
              onPress={() => this.props.navigation.goBack()}
              name={
                Platform.OS == 'ios' ? 'arrow-back-ios' : 'arrow-back'
              }></Icon>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo1.png')}
            />
          </View>
          <Text
            style={[
              s.title,
              {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 17,
                marginTop: -20,
                marginBottom: 20,
              },
            ]}>
            Login
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: Colors.primary,
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 13,
                marginBottom: 30,
              },
            ]}>
            {'Enter your login details to\naccess your account'}
          </Text>

          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Email"
              style={styles.text}
              value={this.state.email}
              onChangeText={(text) => {
                this.setState({email: text});
              }}
              keyboardType="email-address"
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.email.length == 0 ? 0.3 : 1.0,
              }}
              name="check-circle"
              size={20}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Password"
              style={styles.text}
              secureTextEntry={this.state.passwordSecure}
              value={this.state.password}
              onChangeText={(text) => {
                this.setState({password: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon1
              onPress={() => {
                this.setState({passwordSecure: !this.state.passwordSecure});
              }}
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.password.length == 0 ? 0.3 : 1.0,
              }}
              name={this.state.passwordSecure ? 'eye' : 'eye-off'} //, eye
              size={20}
            />
          </View>

          <TouchableOpacity
            style={[s.button, {marginTop: 40}]}
            onPress={() => {
              // this.props.navigation.replace('Tab');
              this.signIn();
            }}>
            <Text style={s.buttonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignSelf: 'center', marginBottom: 20, marginTop: 20}}
            onPress={() => {
              // this.props.navigation.navigate('Signup');
            }}>
            <Text
              style={[
                styles.text,
                {color: Colors.lightBlue, fontSize: 13, flex: 0},
              ]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 20,
            // alignSelf: 'flex-end',
          }}
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}>
          <Text
            style={[
              styles.text,
              {
                color: Colors.lightBlue,
                fontSize: 13,
                flex: 0,
                marginBottom: 10,
              },
            ]}>
            Create an account? Signup
          </Text>
        </TouchableOpacity>
        {this.state.isLoading ? <LoaderView></LoaderView> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 20,
    // alignItems: 'center',
    height: 60,
  },
  logo: {
    marginLeft: 0,
    height: 120,
    flex: 1,
    marginTop: -50,
    marginRight: 40,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 15,
    color: Colors.darkText,
    flex: 1,
  },
});
