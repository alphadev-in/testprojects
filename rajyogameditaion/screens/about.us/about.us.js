import React, { useEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Header from "./../../components/common/header/header";

export default function AboutUs(props) {
  useEffect(() => {
    props.getAboutUs();
  }, []);

  console.log(props.aboutUs);

  return (
    <View>
      <Header title="About Us" {...props} />
      {props.aboutUs &&
        props.aboutUs.data &&
        props.aboutUs.data.map((data, index) => {
          return (
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
            >
              {data.about}
            </Text>
          );
        })}
    </View>
  );
}
