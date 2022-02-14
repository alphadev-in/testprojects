import * as React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
var s = require('../../styles/styles');
import Utils from '../../utils/utils';
import * as Constants from '../../utils/globalData';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigation.replace('Language');
    //   // this.props.navigation.replace('Tab');
    // }, 1000);
    // Constants.DeviceId = await Utils.getData('fcmToken');
    let isLogin = await Utils.getData('isLogin');
    if ((isLogin != null, isLogin == 'true')) {
      console.log('login');
      Constants.UserObj = await Utils.getObj('userObj');
      console.log(Constants.UserObj);
      Constants.Token = await Utils.getData('token');
      this.props.navigation.replace('Tab');
    } else {
      console.log('not login');
      this.props.navigation.replace('Language');
    }
  }

  render() {
    return (
      <SafeAreaView
        style={[s.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/mediport.png')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
  },
});
