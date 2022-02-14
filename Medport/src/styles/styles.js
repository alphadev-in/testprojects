'use strict';

var React = require('react-native');

import * as Font from './typography';
import * as Colors from './colors';

var {StyleSheet, Platform, Dimensions} = React;
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 0 : 24,
  },
  title: {
    fontFamily: Font.Bold,
    color: Colors.darkText,
    fontSize: 21,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: Colors.shadow,
    shadowOpacity: 1.0,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 5,
  },
  button: {
    height: 55,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: '80%',
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontFamily: Font.Bold,
    color: 'white',
    fontSize: 13,
  },
  line: {
    marginHorizontal: 20,
    height: 1,
    width: '100%',
    marginVertical: 4,
    backgroundColor: 'rgba(224, 236, 222, 1.0)',
  },
  view: {
    flexDirection: 'row',
    flex: 1,
    height: 70,
    padding: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 16,
  },
  bottomFloatingButton: {
    marginTop: windowHeight - 80,
    // backgroundColor: 'gray',
    height: 40,
    width: 40,
    position: 'absolute',
    marginLeft: windowWidth - 60,
  },
});
