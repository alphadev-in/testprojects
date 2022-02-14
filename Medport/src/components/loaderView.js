import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import * as Colors from '../styles/colors';
import * as Typography from '../styles/typography';

export default class LoaderView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <ActivityIndicator
            animating={true}
            color="#FFFFFF"
            size="large"></ActivityIndicator>
          <Text style={styles.text}>Loading</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    padding: 30,
    backgroundColor: 'rgba(100,100,100,1.0)',
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginTop: 12,
    fontFamily: Typography.Medium,
  },
});
