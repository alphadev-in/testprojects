import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
const Tab = createBottomTabNavigator();

import Home from './home/Home';
import Notification from './notification/Notification';
import Diseases from './diseases/Diseases';
import Profile from './profile/Profile';
import Add from './add/Add';

import Icon from 'react-native-vector-icons/AntDesign';
var s = require('../styles/styles');
import * as Colors from '../styles/colors';

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              return <Icon name="home" size={30} color={Colors.primary} />;
            case 'Notification':
              return <Icon name="bells" size={30} color={Colors.primary} />;
            case 'Diseases':
              return <Icon name="hearto" size={30} color={Colors.primary} />;
            case 'Profile':
              return <Icon name="user" size={30} color={Colors.primary} />;
            case 'Add':
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 30, // space from bottombar
                    height: 70,
                    width: 70,
                    borderRadius: 35,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={[
                      s.shadow,
                      {
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        shadowColor: 'black',
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        shadowOffset: {
                          width: 3,
                          height: 3,
                        },
                      },
                    ]}>
                    <Icon name="pluscircle" size={60} color={Colors.primary} />
                  </View>
                </View>
              );
            default:
              return null;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {height: 70},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Diseases" component={Diseases} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MyTabs;
