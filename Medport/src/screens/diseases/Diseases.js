import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Constants from '../../utils/globalData';
import LoaderView from '../../components/loaderView.js';
import ApiManager from '../../utils/apiManager';
import NoDataView from '../../components/noDataFoundView.js';

export default class Diseases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDiseases: [],
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
      isLoading: true,
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
          let temp = response.data;
          let sorted = temp.sort(
            (a, b) =>
              new Date(...b.last_checkup_date.split('-').reverse()) -
              new Date(...a.last_checkup_date.split('-').reverse()),
          );
          this.setState({isLoading: false, arrDiseases: sorted});
          // let temp = [
          //   {
          //     id: 1,
          //     disease_id: 1,
          //     diseases_name: 'Dews name',
          //     doctor_name: 'hasmukh patel',
          //     tablets_details:
          //       "\"[{'tablet_name':'omega',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2},{'tablet_name': 'rantac',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2}]\"",
          //     last_checkup_date: '17-12-2020',
          //     next_checkup_date: '25-12-2020',
          //     level: 2,
          //     others_notes: 'test notes',
          //   },
          //   {
          //     id: 1,
          //     disease_id: 1,
          //     diseases_name: 'Dews name',
          //     doctor_name: 'test patel',
          //     tablets_details:
          //       "\"[{'tablet_name':'omega',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2},{'tablet_name': 'rantac',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2}]\"",
          //     last_checkup_date: '18-12-2020',
          //     next_checkup_date: '25-12-2020',
          //     level: 2,
          //     others_notes: 'test notes',
          //   },
          // ];
          // this.setState({isLoading: false, arrDiseases: temp});
        } else {
          this.setState({isLoading: false});
        }
      } else {
        this.setState({isLoading: false});
        console.log('error');
        console.log(response.message);
        let message = response.message;
        let temp = [
          {
            id: 1,
            disease_id: 1,
            diseases_name: 'Dews name',
            doctor_name: 'hasmukh patel',
            tablets_details:
              "\"[{'tablet_name':'omega',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2},{'tablet_name': 'rantac',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2}]\"",
            last_checkup_date: '17-12-2020',
            next_checkup_date: '25-12-2020',
            level: 2,
            others_notes: 'test notes',
          },
          {
            id: 2,
            disease_id: 2,
            diseases_name: 'Dews name2',
            doctor_name: 'test patel',
            tablets_details:
              "\"[{'tablet_name':'omega',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2},{'tablet_name': 'rantac',  'tablet_time_interval':2,  'tablet_reminder':1,  'min':1,  'max':2}]\"",
            last_checkup_date: '18-12-2020',
            next_checkup_date: '25-12-2020',
            level: 2,
            others_notes: 'test notes 2',
          },
        ];
        let sorted = temp.sort(
          (a, b) =>
            new Date(...b.last_checkup_date.split('-').reverse()) -
            new Date(...a.last_checkup_date.split('-').reverse()),
        );

        this.setState({isLoading: false, arrDiseases: sorted});
        Alert.alert('', message);
      }
    });
  }

  getItems = (item, index) => {
    // console.log(index);
    return (
      <TouchableOpacity
        style={[
          styles.row,
          s.shadow,
          {marginBottom: index == this.state.arrDiseases.length - 1 ? 40 : 0},
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
          <Text style={s.title}>{item.diseases_name}</Text>
          <Text style={[styles.text, {marginTop: 0}]}>
            {item.last_checkup_date}
          </Text>
          <Text style={styles.text}>
            {'Next check - ' + item.next_checkup_date}
          </Text>
        </View>
        <View styles={{marginLeft: 8}}>
          <Icon
            name="pluscircle"
            size={28}
            color={Colors.primary}
            style={{opacity: 0.35}}
          />
          <TouchableOpacity style={{marginTop: 12}}>
            <Image
              style={{width: 28, height: 28, opacity: 0.35}}
              source={require('../../assets/images/bell.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  getDiseases = () => {
    let items = [];
    for (let a = 0; a < this.state.arrDiseases.length; a++) {
      items.push(this.getItems(this.state.arrDiseases[a], a));
    }
    return items;
  };

  render() {
    if (this.state.isLoading) {
      return <LoaderView />;
    }

    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView
          style={[
            {
              minHeight: 400,
              flex: 1,
              paddingTop: Platform.OS == 'ios' ? 0 : 24,
            },
            s.container
          ]}>
          <View style={[styles.topView, Platform.OS == 'ios' ? {zIndex:1}: {}]}>
            <Text style={[s.title, {marginLeft: 20}]}>Diseases</Text>
            <DropDownPicker
              items={this.state.arrType}
              defaultValue={this.state.selectedType}
              containerStyle={{height: 40, width: 120, marginRight: 20}}
              style={[{borderWidth: 0, width: 120, marginRight: 20}, s.shadow]}
              placeholder="Select Language"
              placeholderStyle={[styles.text, {opacity: 0.1}]}
              labelStyle={styles.text}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: 'white'}}
              onChangeItem={(item) => {
                let temp = this.state.arrDiseases;
                if (item.value == 1) {
                  temp = temp.sort(
                    (a, b) =>
                      new Date(...b.last_checkup_date.split('-').reverse()) -
                      new Date(...a.last_checkup_date.split('-').reverse()),
                  );
                } else {
                  temp = temp.sort(
                    (a, b) =>
                      new Date(...a.last_checkup_date.split('-').reverse()) -
                      new Date(...b.last_checkup_date.split('-').reverse()),
                  );
                }
                this.setState({
                  selectedType: item.value,
                  arrDiseases: temp,
                });
              }}
            />
          </View>
          {this.state.arrDiseases.length == 0 ? (
          
            <NoDataView title="No disease found" />
           
          ) : (
            this.getDiseases()
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  row: {
    marginHorizontal: 20,
    flexDirection: 'row',
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
});
