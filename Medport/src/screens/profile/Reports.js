import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import NoDataFoundView from '../../components/noDataFoundView';

export default class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: true,
      arrReports: [{}, {}, {}, {}],
      arrType: [
        {
          label: 'Recent',
          value: '1',
        },
        {
          label: 'By Date',
          value: '2',
        },
      ],
      selectedType: '1',
    };
  }

  getItems = (item, index) => {
    console.log(index);
    return (
      <TouchableOpacity
        style={[
          styles.row,
          s.shadow,
          {marginBottom: index == this.state.arrReports.length - 1 ? 40 : 0},
        ]}
        key={index}
        onPress={() => {
          this.setState({modalVisible: true});
        }}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/brain.png')}
        />
        <View style={{flex: 1}}>
          <Text style={s.title}>Heart Disease</Text>
          <Text style={[styles.text, {marginTop: 0}]}>9 Sep, 2020</Text>
          <Text style={styles.text}>Report - Medi2302322</Text>
        </View>
        <View styles={{marginLeft: 8}}>
          <TouchableOpacity style={styles.pdf}>
            <Text style={s.buttonText}>PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 12, alignSelf: 'center'}}>
            <Image
              style={{width: 28, height: 28, opacity: 0.35}}
              source={require('../../assets/images/share.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  getReports = () => {
    let items = [];
    for (let a = 0; a < this.state.arrReports.length; a++) {
      items.push(this.getItems(this.state.arrReports[a], a));
    }
    return items;
  };

  render() {
    return (
      <SafeAreaView style={s.container}>
        {this.state.subscription ? (
          <ScrollView
            style={{
              minHeight: 400,
              flex: 1,
              paddingTop: Platform.OS == 'ios' ? 0 : 24,
              // backgroundColor:'red'
            }}>
            <View
              style={[styles.topView, Platform.OS == 'ios' ? {zIndex: 1} : {}]}>
              <Text style={[s.title, {marginLeft: 20}]}>Reports</Text>
              {/* <View style={{position: 'relative', backgroundColor: 'green'}}> */}
                <DropDownPicker
                  items={this.state.arrType}
                  defaultValue={this.state.selectedType}
                  containerStyle={{height: 40, width: 120, marginRight: 20}}
                  style={[
                    {borderWidth: 0, width: 120, marginRight: 20},
                    s.shadow,
                  ]}
                  placeholder="Select Language"
                  placeholderStyle={[styles.text, {opacity: 0.1}]}
                  labelStyle={styles.text}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  // dropDownStyle={{backgroundColor: 'white'}}
                  onChangeItem={(item) => {
                    let temp = this.state.arrReports;
                    // if (item.value == 1) {
                    //   temp = temp.sort(
                    //     (a, b) =>
                    //       new Date(...b.last_checkup_date.split('-').reverse()) -
                    //       new Date(...a.last_checkup_date.split('-').reverse()),
                    //   );
                    // } else {
                    //   temp = temp.sort(
                    //     (a, b) =>
                    //       new Date(...a.last_checkup_date.split('-').reverse()) -
                    //       new Date(...b.last_checkup_date.split('-').reverse()),
                    //   );
                    // }
                    this.setState({
                      selectedType: item.value,
                      arrReports: temp,
                    });
                  }}
                />
              {/* </View> */}
            </View>
            {this.state.arrReports.length > 0 ? (
              this.getReports()
            ) : (
              <NoDataFoundView title="No Reports Found" />
            )}
          </ScrollView>
        ) : (
          <>
            <Text style={[s.title, {alignSelf: 'center', marginTop: 20}]}>
              Reports
            </Text>
            <View
              style={[
                s.container,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Image
                style={styles.image}
                source={require('../../assets/images/2.png')}
              />
              <Text style={[s.title, {fontSize: 20, marginBottom: 20}]}>
                For the Report and Alarm System
              </Text>
              <TouchableOpacity style={s.button}>
                <Text style={s.buttonText}>Subscribe Plan</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 396 / 280,
  },
  topView: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 60,
    // zIndex: 1,
  },
  row: {
    marginHorizontal: 20,
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 20,
    marginTop: 0,
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 13,
    color: Colors.darkText,
    marginTop: 8,
  },
  pdf: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 30,
    backgroundColor: Colors.red,
  },
});
