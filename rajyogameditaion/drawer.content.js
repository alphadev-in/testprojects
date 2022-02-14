import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "./constants/colors";
import {FONT} from "./utils/server/utils"

export default function DrawerCOntent(props) {
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={require("./assets/images/top_bar_header.jpg")}
          style={{ width: "100%", height: 180, marginTop:-60 }}
        />

        <DrawerItem
          label="Rajyoga Meditation"
          onPress={() => props.navigation.navigate("RajYogaMedication")}
          labelStyle={{fontFamily:FONT}}
        />
        <DrawerItem
          label="About Rajyoga"
          onPress={() => props.navigation.navigate("AboutRajYoga")}
          labelStyle={{fontFamily:FONT}}
        />
        <DrawerItem
          label="Course Solution"
          onPress={() => props.navigation.navigate("CourseSolution")}
          labelStyle={{fontFamily:FONT}}
        />
        <DrawerItem
          label="Rajyoga Course"
          onPress={() => props.navigation.navigate("RajYogaCourse")}
          labelStyle={{fontFamily:FONT}}
        />

        <DrawerItem
          label="Gallary"
          onPress={() => props.navigation.navigate("Gallary")}
          labelStyle={{fontFamily:FONT}}
        />
        <DrawerItem
          label="About Us"
          onPress={() => props.navigation.navigate("AboutUs")}
          labelStyle={{fontFamily:FONT}}
        />
        <DrawerItem
          label="Feedback"
          onPress={() => props.navigation.navigate("FeedBack")}
          labelStyle={{fontFamily:FONT}}
        />
        {/* <DrawerItem
          label="Center In India"
          onPress={() => props.navigation.navigate('CenterInIndia')}
        />
        <DrawerItem
          label="Center In International"
          onPress={() => props.navigation.navigate('CenterInInternational')}
        /> */}
        <DrawerItem
          label="Contact Us"
          onPress={() => props.navigation.navigate("ContactUs")}
          labelStyle={{fontFamily:FONT}}
        />
        <DrawerItem
          label="Share"
          onPress={() => props.navigation.navigate("Share")}
          labelStyle={{fontFamily:FONT}}
        />
      </View>
    </DrawerContentScrollView>
  );
}
