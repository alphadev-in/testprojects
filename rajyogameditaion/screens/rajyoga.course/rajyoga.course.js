import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { colors } from "../../constants/colors";
import {FONT} from "../../utils/server/utils"
import Header from "./../../components/common/header/header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const windowWidth = wp("100%");
const windowHeight = hp("100%");
export default function Rajyogacourse(props) {
  useEffect(() => {
    props.getRajYogaCouse({
      id: 58,
    });
  }, [props.getRajYogaCouse]);

  const [selectedCheck, setSelectedCheck] = useState("English");

  const onChange = (event, value) => {
    if (value == "English") {
      props.getRajYogaCouse({
        id: 58,
      });
    }
    if (value == "Hindi") {
      props.getRajYogaCouse({
        id: 59,
      });
    }
    setSelectedCheck(value);
  };

  const navigateTo = (data) => {
    props.navigation.navigate("RajYogaCourseList", {
      id: data.id,
      title: data.Title,
    });
  };

  return (
    <View>
      <Header title="Rajyoga Course" {...props} />
      <View
        style={{
          backgroundColor: colors.primaryColor,
          marginTop: 20,
          marginBottom: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Text style={styles.mainHeading}>7 Days Rajyoga Meditation Course</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: colors.pinkColor,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CheckBox
            boxType={"square"}
            onChange={(event) => onChange(event, "English")}
            value={selectedCheck === "English"}
            tintColors={{ true: colors.borderColor, false: colors.borderColor }}
          />
          <Text style={{ fontWeight: "bold", color: "#ffffff", fontFamily:FONT }}>
            {" "}
            English{" "}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CheckBox
            boxType={"square"}
            onChange={(event) => onChange(event, "Hindi")}
            value={selectedCheck === "Hindi"}
            tintColors={{ true: colors.borderColor, false: colors.borderColor }}
          />
          <Text style={{ fontWeight: "bold", color: "#ffffff",fontFamily:FONT }}> Hindi </Text>
        </View>
      </View>
      <View style={{ marginTop: 10, marginBottom: 10 }} />
      <ScrollView
        style={{
          marginBottom: 220,
        }}
      >
        {props.rajYogaCourses &&
          props.rajYogaCourses.data &&
          props.rajYogaCourses.data.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigateTo(data)}
                style={{ alignSelf: "center" }}
              >
                <View>
                  <Text style={styles.heading}>{data.Title}</Text>
                  <View>
                    <Image
                      style={styles.imageBox}
                      source={{
                        uri: `http://bkteam.aeliusventure.com/assets/uploads/${data.Image}`,
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    color: colors.primaryColor,
    fontWeight: "bold",
    paddingTop: 20,
    fontFamily:FONT
  },
  imageBox: {
    height: 200,
    width: windowWidth - 20,
    marginTop: 20,
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily:FONT
  },
});
