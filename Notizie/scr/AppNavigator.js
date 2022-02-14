import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
  Share,
} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  HeaderBackButton,
  Header,
} from '@react-navigation/stack';
import Loading from '../scr/screens/Loading';
import Search from './screens/Search';
import Login from '../scr/screens/Login';
import Membership from '../scr/screens/Membership';
import NewsDetails from './screens/NewsDetails';
import NewsDetails2 from './screens/NewsDetails2';
import NewsDetailsSlug from './screens/NewsDetailsSlug';
import Main from '../scr/screens/Main';
import CategoryMain from '../scr/screens/CategoryMain';
import ExtraLinks from '../scr/screens/ExtraLinks';
import VideoDetails from '../scr/screens/VideoDetails';
import News from '../scr/screens/News';
import Category from '../scr/screens/Category';
import URL from '../scr/screens/URL';
import logo from '../scr/assets/img/logo1.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerLayout from './DrawerLayout';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
import {fcmService} from '../FCMService';
import {notificationHandler} from '../NotificationHandler';
import messaging from '@react-native-firebase/messaging';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={{marginLeft: 15}}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <Ionicons name={'menu'} size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};
const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={{marginRight: 15}}
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <Ionicons name={'search'} size={25} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};
const NotificationRedirection = (title) => {
  const navigation = useNavigation();
  navigation.navigate('NewsDetailsSlug', {
    name: title,
    id: title,
    link: title,
  });
};
const _shareContent = async (urlData) => {
  try {
    const result = await Share.share({
      message: 'Share Content - ' + urlData,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};
const AppNavigator = () => {
  // useEffect(() => {
  //   fcmService.registerAppWithFCM();
  //   fcmService.register(onRegister, onNotification, onOpenNotification);
  //   notificationHandler.configure(onOpenNotification);

  //   function onRegister(token) {
  //     console.log('Token Register:', token);
  //   }
  //   function onNotification(notify) {
  //     try {
  //       Alert.alert(
  //         'Notizie',
  //         notify.body,
  //         [
  //           {
  //             text: 'OK',
  //             onPress: () => NotificationRedirection(notify.title),
  //           },
  //         ],
  //         {cancelable: false},
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   function onOpenNotification(notify) {
  //     // Alert.alert(
  //     //   "Notizie",
  //     //   notify.body,
  //     //   [
  //     //     { text: "OK", onPress: () => console.log("OK Pressed") }
  //     //   ],
  //     //   { cancelable: false }
  //     // );
  //     //  Alert.alert("Notizie", notify.body)
  //   }
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainHome"
          component={DrawerNavigator}
          options={({navigation}) => ({
            title: (
              <Image
                style={{width: 120, height: 100}}
                resizeMode="contain"
                source={logo}
              />
            ),
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
              height: 100,
              marginBottom: 0,
            },
            headerStyle: {height: 100},
            headerLeft: ({}) => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
          })}
        />
        <Stack.Screen
          name="URL"
          component={URL}
          options={({route}) => ({
            title: (
              <Image
                style={{width: 120, height: 100}}
                resizeMode="contain"
                source={logo}
              />
            ),
            headerTitleStyle: {
              alignSelf: 'center',
              height: 120,
              marginBottom: 60,
            },
            headerBackTitle: ' ',
            headerStyle: {height: 100},
            headerTintColor: '#000000',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => _shareContent(route.params.url)}
                style={{marginRight: 15}}>
                <Ionicons name={'share-outline'} size={30} color={'black'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={({route}) => ({
            title: (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: global.font_family_title,
                }}>
                {route.params.name}
              </Text>
            ),
            headerBackTitle: ' ',
            headerStyle: {height: 100},
            headerTintColor: '#000000',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => _shareContent(route.params.link)}
                style={{marginRight: 15}}>
                <Ionicons name={'share-outline'} size={30} color={'black'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="VideoDetails"
          component={VideoDetails}
          options={({route}) => ({
            title: (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: global.font_family_title,
                }}>
                {route.params.name}
              </Text>
            ),
            headerBackTitle: ' ',
            headerStyle: {height: 100},
            headerTintColor: '#000000',
          })}
        />
        <Stack.Screen
          name="NewsDetails2"
          component={NewsDetails2}
          options={({route}) => ({
            title: (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: global.font_family_title,
                }}>
                {route.params.name}
              </Text>
            ),
            headerBackTitle: ' ',
            headerStyle: {height: 100},
            headerTintColor: '#000000',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => _shareContent(route.params.link)}
                style={{marginRight: 15}}>
                <Ionicons name={'share-outline'} size={30} color={'black'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="NewsDetailsSlug"
          component={NewsDetailsSlug}
          options={({route}) => ({
            title: (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: global.font_family_title,
                }}>
                {route.params.name}
              </Text>
            ),
            headerBackTitle: ' ',
            headerStyle: {height: 100},
            headerTintColor: '#000000',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => _shareContent(route.params.link)}
                style={{marginRight: 15}}>
                <Ionicons name={'share-outline'} size={30} color={'black'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CategoryMain"
          component={CategoryMain}
          options={({route}) => ({
            title: (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: global.font_family_title,
                }}>
                {route.params.name}
              </Text>
            ),
            headerBackTitle: ' ',
            headerStyle: {height: 100},
            headerTintColor: '#000000',
          })}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({route}) => ({
            title: (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: global.font_family_title,
                }}>
                Cerca
              </Text>
            ),
            headerBackTitle: ' ',
            headerStyle: {height: 100},
            headerTintColor: '#000000',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Category') {
            iconName = focused ? 'grid' : 'grid';
          } else if (route.name === 'Latest') {
            iconName = focused ? 'newspaper' : 'newspaper';
          } else if (route.name === 'ExtraLinks') {
            iconName = focused ? 'videocam' : 'videocam';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        showLabel: false,
        style: {height: 80},
      }}>
      <Tab.Screen name="Home" component={Main} options={{headerShown: false}} />
      <Tab.Screen
        name="ExtraLinks"
        component={ExtraLinks}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Latest"
        component={News}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"
      drawerContent={(props) => <DrawerLayout {...props} />}
      drawerPosition="left"
      drawerStyle={{width: '80%'}}>
      <Drawer.Screen name="DrawerHome" component={TabNavigator} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Membership" component={Membership} />
    </Drawer.Navigator>
  );
};
export default AppNavigator;
