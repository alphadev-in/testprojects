import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constants from '../../utils/globalData';

export default class InfoNotification extends React.Component {
  constructor(props) {
    super(props);
  }

  async turnOnNotification() {
    // if (Platform.OS == 'ios') {
    await this.requestUserPermissionIos();
    // }
    await this.checkPermission();
  }

  async requestUserPermissionIos() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  async checkPermission() {
    console.log('check permission');
    const enabled = await messaging().hasPermission();
    // If permission granted proceed towards token fetch
    if (enabled) {
      this.getToken();
    } else {
      // If permission has not been granted to our app, request user in requestPermission method.
      this.requestPermission();
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // user has a device token
        console.log('token');
        console.log(fcmToken);
        Constants.DeviceId = fcmToken;
        // Alert.alert(fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } else {
      console.log('token');
      console.log(fcmToken);
      Constants.DeviceId = fcmToken;
      // Alert.alert(fcmToken);
    }
    this.props.navigation.navigate('Signup');
  }

  async requestPermission() {
    try {
      await messaging().requestPermission();
      // User has authorized
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView>
          <Icon
            style={styles.backButton}
            size={20}
            onPress={() => this.props.navigation.goBack()}
            name={
              Platform.OS == 'ios' ? 'arrow-back-ios' : 'arrow-back'
            }></Icon>
          <View
            style={[
              s.container,
              {alignItems: 'center', justifyContent: 'center'},
            ]}>
            <Text style={[s.title, {textAlign: 'center'}]}>
              Turn on Notification
            </Text>
            <Image
              style={styles.image}
              source={require('../../assets/images/Info.png')}
            />
            <View style={[styles.row, {marginTop: 0}]}>
              <Icon
                style={{color: Colors.primary}}
                name="check-circle"
                size={20}
              />
              <Text style={styles.text}>Weekly healthy suggestions</Text>
            </View>
            <View
              style={[
                s.line,
                {marginLeft: '10%', width: '90%', marginRight: 0},
              ]}></View>
            <View style={[styles.row]}>
              <Icon
                style={{color: Colors.primary}}
                name="check-circle"
                size={20}
              />
              <Text style={styles.text}>Daily health reminder and report</Text>
            </View>
            <View
              style={[
                s.line,
                {marginLeft: '10%', width: '90%', marginRight: 0},
              ]}></View>
            <View style={[styles.row]}>
              <Icon
                style={{color: Colors.primary}}
                name="check-circle"
                size={20}
              />
              <Text style={styles.text}>Tailor made services just for you</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[s.button, {marginTop: 36}]}
            onPress={() => {
              // this.props.navigation.navigate('Signup')
              this.turnOnNotification();
            }}>
            <Text style={s.buttonText}>TURN ON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center', marginBottom: 20}}
            onPress={() => {
              this.props.navigation.navigate('Signup');
            }}>
            <Text
              style={[
                styles.subTitle,
                {color: Colors.darkText, marginBottom: 10},
              ]}>
              Skip this
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 20,
    marginVertical: 20,
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
    marginLeft: 8,
  },
  image: {
    width: '95%',
    // marginHorizontal: 20,
    // width: '100%',
    height: undefined,
    aspectRatio: 582 / 480,
    marginTop: 0,
    resizeMode: 'contain',
  },
  page: {
    width: 92,
    height: 8,
  },
  row: {
    marginLeft: '10%',
    marginTop: 8,
    // flex: 1,
    height: 40,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    color: Colors.primary,
  },
});
