import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Landing from './src/screens/intro/Landing';
import Language from './src/screens/intro/Language';
import GetStarted from './src/screens/intro/GetStarted';
import InfoNotification from './src/screens/intro/InfoNotification';
import Signup from './src/screens/login/Signup';
import Login from './src/screens/login/Login';

import Tab from './src/screens/Tab';
import Subscription from './src/screens/profile/Subscription';
import AddDisease from './src/screens/add/AddDisease';
import CreateReport from './src/screens/add/CreateReport';
import Group from './src/screens/profile/Group';
import AddGroup from './src/screens/profile/AddGroup';
import Family from './src/screens/profile/Family';
import AddFamily from './src/screens/profile/AddFamily';

const navigationRef = React.createRef();

function App1() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InfoNotification"
          component={InfoNotification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tab"
          component={Tab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Subscription"
          component={Subscription}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddDisease"
          component={AddDisease}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Group"
          component={Group}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddGroup"
          component={AddGroup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Family"
          component={Family}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddFamily"
          component={AddFamily}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateReport"
          component={CreateReport}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App1;
