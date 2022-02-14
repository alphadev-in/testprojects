import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import DrawerContent from './drawer.content';
import RajYogaMedication from './screens/rajyoga.medication/index';

import AboutRajYoga from './screens/about.rajyoga/index';
import RajYogaCourse from './screens/rajyoga.course/index';
import CourseSolution from './screens/course.solution/index';
import Gallary from './screens/gallary/index';
import AboutUs from './screens/about.us/index';
import FeedBack from './screens/feedback/index';
import CenterInIndia from './screens/center.india/index';
import CenterInInternational from './screens/center.internation/index';
import ContactUs from './screens/contact.us/index';
import Share from './screens/share/index';
import RajyogaCoueseList from './screens/rajyoga.course.list.item/index';
import Murli from './screens/murli/index';
import Knowledge from './screens/knowledge/index';
import Medication from './screens/medication/index';
import GitaGayan from './screens/gita.giyan/index';
import Youtube from './screens/youtube.player/youtube.player';

const Drawer = createDrawerNavigator();

export default function HomePage(props) {
  return (
    <Drawer.Navigator
      initialRouteName="RajYogaMedication"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="RajYogaMedication" component={RajYogaMedication} />
      <Drawer.Screen name="AboutRajYoga" component={AboutRajYoga} />
      <Drawer.Screen name="RajYogaCourse" component={RajYogaCourse} />
      <Drawer.Screen name="CourseSolution" component={CourseSolution} />
      <Drawer.Screen name="Gallary" component={Gallary} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="FeedBack" component={FeedBack} />
      <Drawer.Screen name="CenterInIndia" component={CenterInIndia} />
      <Drawer.Screen
        name="CenterInInternational"
        component={CenterInInternational}
      />
      <Drawer.Screen name="RajYogaCourseList" component={RajyogaCoueseList} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Share" component={Share} />
      <Drawer.Screen name="Medication" component={Medication} />
      <Drawer.Screen name="Knowledge" component={Knowledge} />
      <Drawer.Screen name="GitaGayan" component={GitaGayan} />
      <Drawer.Screen name="Murli" component={Murli} />
      <Drawer.Screen name="Youtube" component={Youtube} />
    </Drawer.Navigator>
  );
}
