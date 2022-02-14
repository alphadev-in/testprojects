import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Switch,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import * as Constants from '../../utils/globalData';
import ApiManager from '../../utils/apiManager';

export default class AddDisease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTablets: [{}, {}],
      isEnabled: false,
      isLoading: true,
      diseaseList: [],
    };
  }
  componentDidMount() {
    let url = Constants.BASE_URL + 'diseasecategory/list';
    ApiManager.getApiCAll(url, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);

        this.setState({isLoading: false, arrLang: lan});
      } else {
        this.setState({isLoading: false});
        console.log('error');
        console.log(response.message);
        Alert.alert('', response.message);
      }
    });
  }

  getItems = (item, index) => {
    console.log(index);
    return (
      <View
        style={[styles.view]}
        key={index}
        onPress={() => {
          this.setState({modalVisible: true});
        }}>
        <View style={[s.view, s.shadow]}>
          <TextInput
            placeholder="Tablet Name"
            style={styles.text}
            placeholderTextColor={Colors.placeHolderText}></TextInput>
          <Icon
            style={{color: Colors.primary, marginLeft: 8}}
            name="check-circle"
            size={20}
          />
        </View>
        <View style={[s.view, s.shadow]}>
          <TextInput
            placeholder="Tablet Time Interval"
            style={styles.text}
            placeholderTextColor={Colors.placeHolderText}></TextInput>
          <Icon
            style={{color: Colors.primary, marginLeft: 8}}
            name="check-circle"
            size={20}
          />
        </View>

        <View
          style={
            (styles.topView,
            {
              marginTop: 20,
              marginLeft: 30,
              marginRight: 20,
              flexDirection: 'row',
              alignItems: 'center',
            })
          }>
          <Text style={[styles.text, {color: Colors.placeHolderText}]}>
            Tablet Reminder
          </Text>
          <Switch
            trackColor={{false: '#767577', true: Colors.primary}}
            thumbColor={'#f4f3f4'}
            onValueChange={() => {
              this.toggleSwitch();
            }}
            value={this.state.isEnabled}
          />
        </View>
      </View>
    );
  };

  toggleSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  getTabletList = () => {
    let items = [];
    for (let a = 0; a < this.state.arrTablets.length; a++) {
      items.push(this.getItems(this.state.arrTablets[a], a));
    }
    return items;
  };

  render() {
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView style={[s.container]}>
          <View style={styles.topView}>
            <Text style={[s.title]}>Add Disease</Text>
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
              placeholder="Select disease"
              style={styles.text}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={20}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Doctor Name"
              style={styles.text}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={20}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Last Checkup Date"
              style={styles.text}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={20}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Next Checkup Date (OPTIONAL)"
              style={styles.text}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={20}
            />
          </View>

          <View style={[s.view, s.shadow]}>
            <TextInput
              placeholder="Add attachment (IMAGE/PDF)"
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
              placeholder="Other Notes"
              style={[styles.text, {height: '100%'}]}
              multiline={true}
              placeholderTextColor={Colors.placeHolderText}></TextInput>
            <Icon
              style={{color: Colors.primary, marginLeft: 8}}
              name="check-circle"
              size={20}
            />
          </View>

          <View
            style={[styles.topView, {paddingHorizontal: 0, marginVertical: 0}]}>
            <View style={[s.view, s.shadow, {marginRight: 10}]}>
              <TextInput
                placeholder="Min (Optional)"
                style={styles.text}
                placeholderTextColor={Colors.placeHolderText}></TextInput>
              <Icon
                style={{color: Colors.primary, marginLeft: 8}}
                name="check-circle"
                size={20}
              />
            </View>
            <View style={[s.view, s.shadow]}>
              <TextInput
                placeholder="Max (Optional)"
                style={styles.text}
                placeholderTextColor={Colors.placeHolderText}></TextInput>
              <Icon
                style={{color: Colors.primary, marginLeft: 8}}
                name="check-circle"
                size={20}
              />
            </View>
          </View>

          <View style={[styles.topView, {marginTop: 40}]}>
            <Text style={styles.text}>
              Tablets<Text style={{fontSize: 8}}>{'\nOPTIONAL'}</Text>
            </Text>
            <Icon1
              name="pluscircle"
              size={28}
              color={Colors.primary}
              style={{opacity: 0.35}}
            />
          </View>
          {this.getTabletList()}
          <TouchableOpacity
            style={[
              s.button,
              {marginTop: 20, marginBottom: Platform.OS == 'ios' ? 40 : 64},
            ]}>
            <Text style={s.buttonText}>Add Diseases</Text>
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
  view: {
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: 'rgba(227, 235, 242, 1.0)',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 20,
  },
});
