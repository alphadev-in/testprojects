import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
var s = require('../../styles/styles');
import * as Font from '../../styles/typography';
import * as Colors from '../../styles/colors';

class Add extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={[s.container, {justifyContent: 'flex-end'}]}>
        <View style={[styles.view, s.shadow]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AddDisease');
            }}>
            <Text style={styles.text}>Add Diseases</Text>
          </TouchableOpacity>
          <View style={s.line} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CreateReport');
            }}>
            <Text style={styles.text}>Create Report</Text>
          </TouchableOpacity>
          <View style={s.line} />
          <Text style={styles.text}>Add Medicines</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '90%',
    marginBottom: 16,
    paddingTop: 20,
    paddingBottom: 40,
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: Font.Medium,
    marginVertical: 16,
    fontSize: 20,
    color: Colors.darkText,
  },
});

// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

// function App1() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Add"
//         component={Add}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
export default Add;
