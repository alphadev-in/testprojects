import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView>
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

            <Image
              style={styles.image}
              source={require('../../assets/images/3.png')}
            />
          </View>
          <TouchableOpacity
            style={s.button}
            onPress={() => this.props.navigation.navigate('InfoNotification')}>
            <Text style={s.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center', marginBottom: 20}}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text
              style={[
                styles.subTitle,
                {color: Colors.lightBlue, marginBottom: 10},
              ]}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginVertical: 40,
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
    marginTop: 20,
  },
  image: {
    marginHorizontal: 40,
    width: undefined,
    height: '40%',
    resizeMode: 'contain',
    aspectRatio: 356 / 300,
    marginVertical: 60,
  },
  page: {
    width: 92,
    height: 8,
    marginBottom: 30,
    marginTop: 20,
  },
});
