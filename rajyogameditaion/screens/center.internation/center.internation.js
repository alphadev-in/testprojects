import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Header from "./../../components/common/header/header";

export default function CenterInternational(props) {
  return (
    <View>
      <Header title="Center In International" {...props} />
      <Text style={{ paddingHorizontal: 20, fontSize: 20 }}>About Rajyoga</Text>
    </View>
  );
}
