import "react-native-gesture-handler";
import React, { useEffect } from "react";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import HomePage from "./home";
import { createStackNavigator } from "@react-navigation/stack";
import RajyogaCoueseList from "./screens/rajyoga.course.list.item/index";
const initialState = {};
const store = configureStore(initialState);
const Stack = createStackNavigator();
import { fcmService } from "./FCMService";
import { notificationHandler } from "./NotificationHandler";
import messaging from "@react-native-firebase/messaging";

export default function App() {
  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    notificationHandler.configure(onOpenNotification);

    function onRegister(token) {
      console.log("Token Register:", token);
    }
    function onNotification(notify) {
      try {
        console.log("onOpenNotification");
        Alert.alert("Rajyoga Meditation", notify.notification.body, [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("Ok Pressed!"),
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
    function onOpenNotification(notify) {
      try {
        console.log("onOpenNotification");
        Alert.alert("Rajyoga Meditation", notify.notification.body, [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("Ok Pressed!"),
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
