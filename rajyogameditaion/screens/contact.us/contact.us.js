import React, { useEffect } from "react";
import { Button, Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Header from "./../../components/common/header/header";
import {FONT} from "../../utils/server/utils"

export default function ContactUs(props) {
  useEffect(() => {
    props.getContact();
  }, []);

  const openWhatsApp = (url) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Header title="Contact Us" {...props} />
      <View style={{ marginTop: 20 }}></View>
      {props.contact &&
        props.contact.data &&
        props.contact.data.map((data, index) => {
          if (index === 1) {
            return (
              <Text
                key={index}
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily:FONT
                }}
              >
                {data.about}
              </Text>
            );
          }
        })}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            openWhatsApp("https://chat.whatsapp.com/CDSTkjTWk1K8zoCgWgx3G0")
          }
          style={{ width: "95%", height: 200, borderRadius: 15 }}
        >
          <View
            style={{
              backgroundColor: "#25D366",
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20, fontFamily:FONT }}
            >
              Join Our Whatsapp group
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
