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
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Constants from '../../utils/globalData';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  async componentDidMount() {}

  async toggleSwitch() {
    let status = !this.state.isEnabled;
    this.setState({isEnabled: status});
  }

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView style={[s.container]}>
          <View style={styles.topView}>
            <Text style={[s.title]}>Profile</Text>
            <TouchableOpacity
              style={[s.button, {width: 90, height: 36}]}
              onPress={() => {
                this.props.navigation.navigate('Group');
              }}>
              <Text style={styles.buttonText}>Group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.topView}>
            <Text style={[s.title, {fontSize: 20}]}>
              {Constants.UserObj.first_name + ' ' + Constants.UserObj.last_name}
              <Text style={styles.text}>{'\n' + Constants.UserObj.email}</Text>
            </Text>
            <Image
              style={styles.image}
              source={require('../../assets/images/logo1.png')}></Image>
          </View>

          <View style={[s.line, {width: undefined}]} />

          <View style={styles.topView}>
            <Text style={styles.text}>Reports</Text>
            <TouchableOpacity
              style={[s.button, {width: 110, height: 36}]}
              onPress={() => {
                this.props.navigation.navigate('Reports');
              }}>
              <Text style={styles.buttonText}>2 Reports</Text>
            </TouchableOpacity>
          </View>
          <View style={[s.line, {width: undefined}]} />
          <View style={styles.topView}>
            <Text style={styles.text}>Family Details</Text>
            <Icon
              name="right"
              size={24}
              onPress={() => {
                this.props.navigation.navigate('Family');
              }}
            />
          </View>
          <View style={[s.line, {width: undefined}]} />
          <View style={styles.topView}>
            <Text style={styles.text}>Subscriptions</Text>
            <TouchableOpacity
              style={[s.button, {width: 110, height: 36}]}
              onPress={() => {
                this.props.navigation.navigate('Subscription');
              }}>
              <Text style={styles.buttonText}>
                {Constants.UserObj.plan_name}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[s.line, {width: undefined}]} />
          <View style={styles.topView}>
            <Text style={styles.text}>Notifications</Text>
            <Switch
              trackColor={{false: '#767577', true: Colors.primary}}
              thumbColor={'#f4f3f4'}
              onValueChange={() => {
                this.toggleSwitch();
              }}
              value={this.state.isEnabled}
            />
          </View>
          <View style={[s.line, {width: undefined}]} />
          <View style={styles.topView}>
            <Text style={styles.text}>Help and Support</Text>
            <Icon name="right" size={24} />
          </View>
          <View style={[s.line, {width: undefined}]} />
          <View style={styles.topView}>
            <Text style={styles.text}>About App</Text>
            <Icon name="right" size={24} />
          </View>
          <View style={[s.line, {width: undefined}]} />
          <View style={styles.topView}>
            <Text style={styles.text}>Terms and Conditions</Text>
            <Icon name="right" size={24} />
          </View>
          <View style={[s.line, {width: undefined}]} />
          <View style={styles.topView}>
            <Text style={styles.text}>App Version</Text>
            <Text
              style={[
                styles.text,
                {color: Colors.placeHolderText, textAlign: 'right'},
              ]}>
              1.1.0
            </Text>
          </View>
          <View
            style={[
              s.line,
              {width: undefined, marginBottom: Platform.OS == 'ios' ? 40 : 60},
            ]}
          />
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
    alignContent: 'center',
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 15,
    color: Colors.darkText,
    flex: 1,
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
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Reports from './Reports';

function App1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default App1;
