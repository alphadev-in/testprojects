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

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: 'Karan',
      lName: 'Prajapati',
      email: 'prajapatikaranc@yahoo.com',
      phone: '9537621636',
      password: '12345678',
      isLoading: false,
      showPassword: false,
    };
  }

  signUp = () => {
    if (this.state.fName.trim().length == 0) {
      Alert.alert('', 'Please enter your first name');
      return;
    }
    if (this.state.lName.trim().length == 0) {
      Alert.alert('', 'Please enter your last name');
      return;
    }
    if (
      this.state.email.trim().length == 0 ||
      !Utils.isValidEmail(this.state.email.trim())
    ) {
      Alert.alert('', 'Please enter valid email');
      return;
    }
    // if (this.state.phone.trim().length != 0 && isNaN(this.state.phone.trim())) {
    //   Alert.alert('', 'Please enter valid phone number');
    //   return;
    // }
    if (this.state.password.trim().length == 0) {
      Alert.alert('', 'Please enter password');
      return;
    }
    if (
      this.state.password.trim().length < 6 ||
      this.state.password.trim().length > 12
    ) {
      Alert.alert('', 'The password must be between 6 and 12 characters.');
      return;
    }
    let params = {
      first_name: this.state.fName.trim(),
      last_name: this.state.lName.trim(),
      email: this.state.email.trim(),
      phone_number: this.state.phone.trim(),
      password: this.state.password.trim(),
      language_id: Constants.LangId.length == 0 ? 3 : Constants.LangId,
    };
    let url = Constants.BASE_URL + 'register';
    this.setState({isLoading: true});
    ApiManager.postApiCall(url, params, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);
        // this.setState({isLoading: false});
        //{
        // "message": "Register Successfully",
        // "status": true
        // }
        // this.props.navigation.navigate('Tab');
        this.signIn();
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
  };

  async signIn() {
    let params = {
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      device_id: Constants.DeviceId,
    };
    let url = Constants.BASE_URL + 'login';

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
        <ScrollView style={s.container}>
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
            Signup
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
            {'Enter your account details to\nmanage your account'}
          </Text>
          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="First Name"
              style={styles.text}
              value={this.state.fName}
              onChangeText={(text) => {
                this.setState({fName: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.fName.length == 0 ? 0.3 : 1.0,
              }}
              name="check-circle"
              size={20}
            />
          </View>
          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Last Name"
              style={styles.text}
              value={this.state.lName}
              onChangeText={(text) => {
                this.setState({lName: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.lName.length == 0 ? 0.3 : 1.0,
              }}
              name="check-circle"
              size={20}
            />
          </View>
          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Email"
              value={this.state.email}
              style={styles.text}
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({email: text});
              }}
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
              placeholder={'Phone Number'}
              style={styles.text}
              value={this.state.phone}
              keyboardType="phone-pad"
              onChangeText={(text) => {
                let t = text;
                // if (text.includes('.')) {
                //   t = text.replace('.', '');
                // }
                this.setState({phone: t});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.phone.length == 0 ? 0.3 : 1.0,
              }}
              name="check-circle"
              size={20}
            />
          </View>
          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Password"
              style={styles.text}
              value={this.state.password}
              secureTextEntry={this.state.showPassword ? false : true}
              onChangeText={(text) => {
                this.setState({password: text});
              }}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon1
              onPress={() => {
                this.setState({showPassword: !this.state.showPassword});
              }}
              style={{
                color: Colors.primary,
                marginLeft: 8,
                opacity: this.state.password.length == 0 ? 0.3 : 1.0,
              }}
              name={this.state.showPassword ? 'eye-off' : 'eye'} //"eye" //eye-off, eye
              size={20}
            />
          </View>

          <TouchableOpacity
            style={[s.button, {marginTop: 40}]}
            onPress={() => {
              // this.props.navigation.replace('Tab');
              this.signUp();
            }}>
            <Text style={s.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignSelf: 'center', marginBottom: 20, marginTop: 20}}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text
              style={[
                styles.text,
                {color: Colors.lightBlue, fontSize: 13, marginBottom: 20},
              ]}>
              Already have an account? Sing In
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
