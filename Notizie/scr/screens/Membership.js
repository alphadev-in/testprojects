import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import backimg from '../assets/img/backimg.png';
import logo from '../assets/img/logo.png';
import {global, colors} from '../utils';

const Membership = ({navigation}) => {
  useEffect(() => {});

  return (
    <View style={styles.container}>
      <Text>Membership Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
});

export default Membership;
