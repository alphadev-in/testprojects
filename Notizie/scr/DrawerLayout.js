import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {global} from './utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const DrawerLayout = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const USERDATA = 'USERDATA';
    try {
      const jsonValue = await AsyncStorage.getItem('@' + USERDATA);
      return jsonValue != null ? setData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
  };
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
    setData(null);
    props.navigation.navigate('Loading');
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles1.container}>
        <TouchableOpacity
          style={styles1.buttonPadding}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text style={styles1.name}>
            <Ionicons name={'ios-home'} size={25} color={'black'} /> Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles1.buttonPadding}
          onPress={() => {
            props.navigation.navigate('Category');
          }}>
          <Text style={styles1.name}>
            <Ionicons name={'grid'} size={25} color={'black'} /> Categorie
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles1.buttonPadding}
          onPress={() =>
            props.navigation.navigate('URL', {
              url: global.FacebookURL,
            })
          }>
          <Text style={styles1.name}>
            <Ionicons name={'logo-facebook'} size={25} color={'black'} />{' '}
            Seguici su facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles1.buttonPadding}
          onPress={() => {
            props.navigation.navigate('Latest');
          }}>
          <Text style={styles1.name}>
            <Ionicons name={'newspaper'} size={25} color={'black'} /> Ultime
            Notizie
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles1.buttonPadding}
          onPress={() =>
            props.navigation.navigate('URL', {
              url: global.WebURL,
            })
          }>
          <Text style={styles1.name}>
            <Ionicons name={'globe-outline'} size={25} color={'black'} />{' '}
            Notizie.it
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles1.buttonPadding}
          onPress={() => {
            props.navigation.navigate('Membership');
          }}>
          <Text style={styles1.name}>
            <Ionicons name={'people'} size={25} color={'black'} /> Membership
          </Text>
        </TouchableOpacity> */}
        {data !== null ? (
          <TouchableOpacity
            style={styles1.button}
            onPress={() => clearAsyncStorage()}>
            <Text style={styles1.name2}>
              <Ionicons name={'log-in'} size={25} color={'white'} /> Logout
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles1.button}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles1.name2}>
              <Ionicons name={'log-in'} size={25} color={'white'} /> Login
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </DrawerContentScrollView>
  );
};
const styles1 = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  buttonPadding: {
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },

  name: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
    color: 'black',
    fontFamily: global.font_family_title,
    alignContent: 'center',
  },
  button: {
    marginTop: 13,
    paddingBottom: 13,
    backgroundColor: 'red',
    borderRadius: 10,
  },

  name2: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: global.font_family_title,
  },
});

export default DrawerLayout;
