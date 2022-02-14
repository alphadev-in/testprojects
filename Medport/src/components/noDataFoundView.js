import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Colors from '../styles/colors';
import * as Typography from '../styles/typography';

export default class NoDataFoundView extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.darkText,
    fontSize: 16,
    margin: 12,
    fontFamily: Typography.Bold,
  },
});
