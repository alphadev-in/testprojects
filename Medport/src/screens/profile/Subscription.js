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
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import {Pages} from 'react-native-pages';
import * as Constants from '../../utils/globalData';

export default class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{}, {}, {}],
    };
  }

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        {/* <ScrollView style={[s.container]}> */}
        <View style={styles.topView}>
          <Icon
            size={20}
            onPress={() => this.props.navigation.goBack()}
            name={Platform.OS == 'ios' ? 'arrow-back-ios' : 'arrow-back'}
          />
          <Text style={[s.title]}>Subscription</Text>
        </View>

        <View
          style={[s.view, s.shadow, {height: 80, flex: 0, marginBottom: 20}]}>
          <View style={{flex: 1, justifyContent: 'center', height: '100%'}}>
            <Text style={styles.text}>{'Plan '+ Constants.UserObj.plan_id}</Text>
            <Text style={styles.text1}>{Constants.UserObj.plan_name}</Text>
          </View>
          <Icon
            style={{color: Colors.primary, marginLeft: 8}}
            name="check-circle"
            size={30}
          />
        </View>
        <Text style={[s.title, {fontSize: 22, alignSelf: 'center'}]}>
          Recommended Plan
        </Text>
        <Text
          style={[
            styles.text,
            {
              alignSelf: 'center',
              marginTop: 12,
              textAlign: 'center',
              width: '90%',
              fontSize: 14,
            },
          ]}>
          Start your premium plan and get{'\n'}benefit for Alarm and Report
          System
        </Text>
        <Pages indicatorColor={Colors.primary}>
          <View style={{flex: 1, backgroundColor: 'White'}}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  marginTop: 8,
                }}>
                <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
                  <Text
                    style={[styles.text1, {color: 'rgba(138,138,138,1.0)'}]}>
                    MONTHLY
                  </Text>
                  <Text style={[styles.text, {color: 'rgba(28,28,28,1.0)'}]}>
                    $2.99/mo
                  </Text>
                </View>
                <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
                  <Text
                    style={[styles.text1, {color: 'rgba(138,138,138,1.0)'}]}>
                    ANNUAL
                  </Text>
                  <Text style={[styles.text, {color: 'rgba(28,28,28,1.0)'}]}>
                    $29.99/mo
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={[s.button, {marginTop: 20, width: '90%'}]}>
                <Text style={s.buttonText}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: 'White'}}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  marginTop: 8,
                }}>
                <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
                  <Text
                    style={[styles.text1, {color: 'rgba(138,138,138,1.0)'}]}>
                    MONTHLY
                  </Text>
                  <Text style={[styles.text, {color: 'rgba(28,28,28,1.0)'}]}>
                    $2.99/mo
                  </Text>
                </View>
                <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
                  <Text
                    style={[styles.text1, {color: 'rgba(138,138,138,1.0)'}]}>
                    ANNUAL
                  </Text>
                  <Text style={[styles.text, {color: 'rgba(28,28,28,1.0)'}]}>
                    $29.99/mo
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={[s.button, {marginTop: 20, width: '90%'}]}>
                <Text style={s.buttonText}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: 'White'}}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  marginTop: 8,
                }}>
                <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
                  <Text
                    style={[styles.text1, {color: 'rgba(138,138,138,1.0)'}]}>
                    MONTHLY
                  </Text>
                  <Text style={[styles.text, {color: 'rgba(28,28,28,1.0)'}]}>
                    $2.99/mo
                  </Text>
                </View>
                <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
                  <Text
                    style={[styles.text1, {color: 'rgba(138,138,138,1.0)'}]}>
                    ANNUAL
                  </Text>
                  <Text style={[styles.text, {color: 'rgba(28,28,28,1.0)'}]}>
                    $29.99/mo
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon1 name="check" size={36}></Icon1>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    flexDirection: 'column',
                  }}>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    All-in-one Family/Group
                  </Text>
                  <Text style={[styles.text1, {fontSize: 12}]}>
                    We bring all data on account and managed by different users,
                    add upto 3 people
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={[s.button, {marginTop: 20, width: '90%'}]}>
                <Text style={s.buttonText}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pages>
        {/* </ScrollView> */}
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
    // flex: 1,
  },
  text1: {
    fontFamily: Font.Medium,
    fontSize: 10,
    color: Colors.placeHolderText,
    // flex: 1,
    marginTop: 4,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 30,
    marginTop: 20,
    backgroundColor: 'rgba(187,216,242,1.0)',
    borderRadius: 16,
    padding: 10,
  },
});
