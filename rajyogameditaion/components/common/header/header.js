import React from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import SymbolImage from "./../../../assets/images/app_symbol.png";
import { colors } from "./../../../constants/colors";
import {FONT} from "./../../../utils/server/utils"

export default function Header(props) {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Icon name="bars" style={styles.iconStyle} />
        </TouchableOpacity>
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.heading}>{props.title ? props.title : null}</Text>
        </View>
      </View>
      <View style={{ marginRight: 10 }}>
        <Image
          source={require("./../../../assets/images/app_symbol.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    color: "#ffffff",
  },
  header: {
    height: 120,
    backgroundColor: colors.primaryColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#ffffff",
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  iconStyle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  heading: {
    color: "#ffffff",
    fontSize: 20,
    paddingLeft: 10,
    fontFamily:FONT
  },
});
