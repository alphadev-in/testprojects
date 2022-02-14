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
  Dimensions,
  Alert,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Constants from '../../utils/globalData';
import LoaderView from '../../components/loaderView.js';
import ApiManager from '../../utils/apiManager';
import NoDataView from '../../components/noDataFoundView.js';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // arrNotifications: [
      //   {
      //     emergency_details_id: 1,
      //     id: 1,
      //     msg_text: 'test msg test',
      //     name: 'testemergency',
      //     relations:
      //       '[{"relation":"Son","name":"dinesh","contact_no":7845123256},{"relation":"wife","name":"rekha","contact_no":78456569832}]',
      //     type: 1,
      //   },
      //   {
      //     emergency_details_id: 1,
      //     id: 2,
      //     msg_text: 'test msg test',
      //     name: 'testemergency',
      //     relations:
      //       '[{"relation":"Son","name":"dinesh","contact_no":7845123256},{"relation":"wife","name":"rekha","contact_no":78456569832}]',
      //     type: 1,
      //   },
      // ],
      arrNotifications: [],
      modalVisible: false,
      isLoading: false,
      title: '',
      msg: '',
      date: '',
      index: '',
    };
  }

  componentDidMount() {
    // console.log(Constants.UserObj.first_name);
    // let url = Constants.BASE_URL + 'api/alarm/list';
    // ApiManager.getApiCAll(url, (response) => {
    //   if (response.isSuccess) {
    //     console.log('success');
    //     console.log(response.data);
    //     if (response.data != null) {
    //       this.setState({isLoading: false, arrNotifications: response.data});
    //     } else {
    //       this.setState({isLoading: false});
    //     }
    //   } else {
    //     this.setState({isLoading: false});
    //     console.log('error');
    //     console.log(response.message);
    //     let message = response.message;
    //     if (response.message.phone_number != null) {
    //       message = response.message.phone_number[0];
    //     }
    //     if (response.message.email != null) {
    //       message = response.message.email[0];
    //     }
    //     Alert.alert('', message);
    //   }
    // });
  }

  getItems = (item, index) => {
    // console.log(index);
    return (
      <TouchableOpacity
        style={[
          styles.row,
          s.shadow,
          {
            marginBottom:
              index == this.state.arrNotifications.length - 1 ? 40 : 0,
          },
        ]}
        key={index}
        onPress={() => {
          this.setState({modalVisible: true});
        }}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/bell.png')}
        />
        <View style={{flex: 1}}>
          <Text style={s.title}>{item.name}</Text>
          <Text style={styles.text}>{item.msg_text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  getNotifications = () => {
    let items = [];
    for (let a = 0; a < this.state.arrNotifications.length; a++) {
      items.push(this.getItems(this.state.arrNotifications[a], a));
    }
    return items;
  };

  render() {
    if (this.state.isLoading) {
      return <LoaderView />;
    }
    return (
      <SafeAreaView style={[s.container]}>
        <ScrollView style={[s.container]}>
          <Text style={[s.title, {marginLeft: 20, marginVertical: 16}]}>
            Notification
          </Text>
          {this.getNotifications()}
          {this.state.arrNotifications.length == 0 ? (
            <NoDataView title="No notification found" />
          ) : null}
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <View style={[styles.modalView, s.shadow]}>
              <Icon
                name="close"
                style={{alignSelf: 'flex-end'}}
                size={30}
                onPress={() => {
                  this.setState({modalVisible: false});
                }}></Icon>
              <Text
                style={[s.title, {marginVertical: 16, textAlign: 'center'}]}>
                Doctor Notification
              </Text>
              <Text style={[styles.text, {textAlign: 'center'}]}>
                Your target for today is to keep positive mindset and smile to
                everyone you meet.
              </Text>
              <Text
                style={[s.title, {marginVertical: 16, textAlign: 'center'}]}>
                04 March, 2020
              </Text>
              <TouchableOpacity style={[s.button, {width: '80%'}]}>
                <Text style={[s.buttonText, {marginHorizontal: 40}]}>
                  Mark As Completed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 20,
  },
  text: {
    fontFamily: Font.Medium,
    fontSize: 13,
    color: Colors.primary,
    marginTop: 8,
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.modal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
});
