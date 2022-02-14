import React from 'react';
import {Text} from 'react-native';
import {View, Button,SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from './../../components/common/header/header';

export default function HomePage(props) {
  const Drawer = createDrawerNavigator();

  return (
    <View>
      <Header title="Title 1" {...props} />
    </View>
  );
}
