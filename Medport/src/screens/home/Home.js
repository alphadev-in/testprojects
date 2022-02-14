import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import CalendarStrip from 'react-native-calendar-strip';
import * as Constants from '../../utils/globalData';
import LoaderView from '../../components/loaderView.js';
import ApiManager from '../../utils/apiManager';
import moment from 'moment';
import NoDataView from '../../components/noDataFoundView.js';
import Geolocation from '@react-native-community/geolocation';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var curHr = today.getHours();
    let wish = '';
    if (curHr < 12) {
      // console.log('good morning');
      wish = 'Good Morning';
    } else if (curHr < 18) {
      // console.log('good afternoon');
      wish = 'Good Afternoon';
    } else {
      // console.log('good evening');
      wish = 'Good Evening';
    }
    this.state = {
      wish: wish,
      selectedDate: new Date(),
      arrData: [
        // {
        //   id: 1,
        //   disease_id: 1,
        //   diseases_name: 'Dews name',
        //   doctor_name: 'Hasmukh patel',
        //   tablets_details:
        //     "\"[{'tablet_name':'omega',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2},{'tablet_name': 'rantac',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2}]\"",
        //   last_checkup_date: '17-12-2020',
        //   next_checkup_date: '04-02-2021',
        //   level: 2,
        //   others_notes: 'test notes',
        // },
        // {
        //   id: 1,
        //   disease_id: 1,
        //   diseases_name: 'Dews name',
        //   doctor_name: 'hasmukh patel',
        //   tablets_details:
        //     "\"[{'tablet_name':'omega',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2},{'tablet_name': 'rantac',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2}]\"",
        //   last_checkup_date: '17-12-2020',
        //   next_checkup_date: '05-02-2021',
        //   level: 2,
        //   others_notes: 'test notes',
        // },
      ],
      isLoading: false,
    };
  }

  componentDidMount() {
    // console.log(Constants.UserObj.first_name);
    let url = Constants.BASE_URL + 'api/disease/list';
    ApiManager.getApiCAll(url, (response) => {
      if (response.isSuccess) {
        console.log('success');
        console.log(response.data);
        if (response.data != null) {
          this.setState({isLoading: false, arrData: response.data});
        } else {
          this.setState({isLoading: false});
        }
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
  }

  getItems = (arr) => {
    let items = [];
    for (let i = 0; i < arr.length; i++) {
      items.push(
        <View key={i}>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/brain.png')}
            />
            <View style={styles.middleView}>
              <Text style={[styles.text, {color: Colors.placeHolderText}]}>
                {arr[i].doctor_name}
              </Text>
              <Text style={[styles.text, {marginVertical: 4}]}>
                {arr[i].diseases_name}
              </Text>
              <Text style={[styles.text, {color: Colors.placeHolderText}]}>
                {arr[i].others_notes}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.touchableOpacity,
                {backgroundColor: Colors.orange},
              ]}>
              <Text style={styles.buttonTextStyle}>VIEW</Text>
            </TouchableOpacity>
          </View>
          <View style={[s.line, {marginHorizontal: 0}]} />
        </View>,
      );
    }
    return items;
  };

  alarm = () => {
    // GetLocation.getCurrentPosition({
    //   enableHighAccuracy: true,
    //   timeout: 15000,
    // })
    //   .then((location) => {
    //     console.log("location");
    //     console.log(location);
    //   })
    //   .catch((error) => {
    //     const {code, message} = error;
    //     console.log("error1");
    //     console.log(error);
    //     console.warn(code, message);
    //   });
    Geolocation.getCurrentPosition((info) => console.log(info));
  };

  renderBody1 = () => {
    let arrToday = [];
    let arrNextWeek = [];

    // console.log(this.state.arrData[0].next_checkup_date);
    for (let i = 0; i < this.state.arrData.length; i++) {
      let d1 = moment(this.state.arrData[i].next_checkup_date, 'DD-MM-YYYY');
      console.log(d1);
      let d2 = moment(new Date());
      if (d1 < d2 && d1 > d2.add('-1', 'days')) {
        // console.log('today');
        arrToday.push(this.state.arrData[i]);
      } else if (d1 > d2 && d1 < d2.add('7', 'days')) {
        console.log('next week');
        arrNextWeek.push(this.state.arrData[i]);
      } else {
        console.log('else');
      }
    }
    return (
      <View style={styles.container}>
        {/* <View style={[styles.cal,{position:'absolute'}, s.shadow]}></View> */}
        <CalendarStrip
          scrollable
          scrollerPaging={true}
          style={[styles.cal, s.shadow]}
          calendarColor={'white'}
          selectedDate={new Date()}
          calendarHeaderStyle={{color: Colors.darkText}}
          dateNumberStyle={{color: 'black'}}
          dateNameStyle={{color: 'black'}}
          iconContainer={{flex: 0.1}}
          highlightDateNumberStyle={{color: Colors.primary}}
          onDateSelected={(date) => {
            console.log(date);
            this.setState({selectedDate: date});
          }}
          // minDate={new Date()}
          onWeekChanged={(start, end) => {
            // console.log("start="+start);
            // console.log("end="+end)
            // console.log('week change');
          }}
        />
        {arrToday.length > 0 ? (
          <>
            <Text style={styles.text}>What are you doing today?</Text>
            {this.getItems(arrToday)}
          </>
        ) : null}
        {arrNextWeek.length > 0 ? (
          <>
            <Text
              style={[styles.text, {marginTop: arrToday.length > 0 ? 20 : 0}]}>
              Next Week
            </Text>
            {this.getItems(arrNextWeek)}
          </>
        ) : null}

        {arrNextWeek.length == 0 && arrToday.length == 0 ? (
          <NoDataView title="No Disease Found" />
        ) : null}
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return <LoaderView />;
    }
    return (
      <StickyParallaxHeader
        headerType="DetailsHeader"
        leftTopIconOnPress={() => {
          console.log('more details');
          this.props.navigation.navigate('Diseases');
        }}
        leftTopIcon={require('../../assets/images/menu.png')}
        rightTopIcon={require('../../assets/images/logo1.png')}
        rightTopIconOnPress={() => {
          console.log('view your profile');
          this.props.navigation.navigate('Profile');
        }}
        tag="Your Target for today is to keep positive mindset and smile to everyone you meet."
        tagStyle={styles.tagStyle}
        title={this.state.wish + '\n' + Constants.UserObj.first_name}
        titleStyle={styles.titleStyle}
        renderBody={() => this.renderBody1()}
        navTitle={this.state.wish + ', ' + Constants.UserObj.first_name}
        navStyle={styles.navStyle}
        headerHeight={120}
        alarmStyle={styles.alarmStyle}
        alarmOnPress={() => {
          console.log('Alarm');
          this.alarm();
        }}
        parallaxHeight={250}
        buttonTextStyle={styles.buttonTextStyle}
        backgroundColor={Colors.bgBlue}
        button1Press={() => {}}
        button2Press={() => {}}></StickyParallaxHeader>
    );
  }
}

const styles = StyleSheet.create({
  navStyle: {
    fontFamily: Font.Bold,
    color: Colors.darkText,
    fontSize: 14,
    marginLeft: 16,
  },
  titleStyle: {
    fontFamily: Font.Bold,
    color: Colors.darkText,
    fontSize: 25,
    marginHorizontal: 40,
  },
  alarmStyle: {
    fontFamily: Font.Medium,
    color: 'rgba(252,252,252,1.0)',
    fontSize: 12,
  },
  tagStyle: {
    fontFamily: Font.Medium,
    color: Colors.primary,
    fontSize: 13,
    marginHorizontal: 40,
  },
  buttonTextStyle: {
    fontFamily: Font.Bold,
    color: 'rgba(251,251,251,1.0)',
    fontSize: 8,
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 13,
    color: Colors.darkText,
  },
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    // alignItems:'center',
    height: 80,
    marginTop: 20,
    // backgroundColor:'gray'
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  touchableOpacity: {
    width: 80,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleView: {
    flex: 1,
    marginHorizontal: 16,
  },
  cal: {
    height: 100,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 20,
    borderRadius: 16,
    borderWidth: 0.5,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 30,
    // backgroundColor:'green'
  },
});
