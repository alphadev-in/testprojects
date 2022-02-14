import React, { useState } from "react";
import { Alert, StyleSheet, _View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./../../components/common/header/header";
import {FONT} from "../../utils/server/utils"

export default function Feedback(props) {
  const [state, setState] = useState({
    fullName: "",
    fullNameIsFocused: false,
    email: "",
    emailIsFocused: false,
    phoneNumber: "",
    phoneNumberIsFocused: false,
    country: "",
    countryIsFocused: false,
    state: "",
    stateIsFocused: false,
    city: "",
    cityIsFocused: false,
  });

  const onFocus = (name) => {
    setState({ ...state, [name]: true });
  };

  const onBlur = (name) => {
    setState({ ...state, [name]: false });
  };

  const onChangeText = (event, value) => {
    setState({ ...state, [value]: event });
  };

  const onSubmit = async () => {
   await props.postContact({
      full_name: state.fullName,
      email:state.email,
     phone_number:state.phoneNumber,
      country:state.country,
      state:state.state,
      city:state.city,
    });
    // Alert.alert(props.contactResult.data,[
    //   { text: "SENT", onPress: () => props.navigation.navigate("RajYogaMedication") }
    // ])
    Alert.alert(
      'RajyogaMeditation',
      "Thank you for contact us! We will get back to you soon.",
      [
        
        { text: "OK", onPress: () => props.navigation.navigate("RajYogaMedication")}
      ]
    );
  };

  const redirect = ()=>{}

  // console.log(props.contactResult);

  return (
    <View>
      <Header title="Feedback" {...props} />
      <View style={{ padding: 20 }}>
        <ScrollView>
          <View>
            <Text style={{ color: state.fullNameIsFocused ? "#25D366" : null , fontFamily:FONT}}>
              Full name
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, "fullName")}
              onFocus={() => onFocus("fullNameIsFocused")}
              onBlur={() => onBlur("fullNameIsFocused")}
              placeholder="Full Name"
              style={
                state.fullNameIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text style={{ color: state.emailIsFocused ? "#25D366" : null,fontFamily:FONT }}>
              Email
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, "email")}
              onFocus={() => onFocus("emailIsFocused")}
              onBlur={() => onBlur("emailIsFocused")}
              placeholder="Email address"
              style={
                state.emailIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text
              style={{ color: state.phoneNumberIsFocused ? "#25D366" : null, fontFamily:FONT }}
            >
              Phone Number
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, "phoneNumber")}
              onFocus={() => onFocus("phoneNumberIsFocused")}
              onBlur={() => onBlur("phoneNumberIsFocused")}
              placeholder="Phone number"
              style={
                state.phoneNumberIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text style={{ color: state.countryIsFocused ? "#25D366" : null ,fontFamily:FONT}}>
              Message
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, "country")}
              onFocus={() => onFocus("countryIsFocused")}
              onBlur={() => onBlur("countryIsFocused")}
              multiline
              placeholder="Message"
        numberOfLines={4}
              style={
                state.countryIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
              style={{height:150, borderBottomWidth:1}}
            />
          </View>
          {/* <View style={{ paddingTop: 15 }}>
            <Text style={{ color: state.stateIsFocused ? "#25D366" : null, fontFamily:FONT }}>
              State
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, "state")}
              onFocus={() => onFocus("stateIsFocused")}
              onBlur={() => onBlur("stateIsFocused")}
              style={
                state.stateIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text style={{ color: state.cityIsFocused ? "#25D366" : null,fontFamily:FONT }}>
              City
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, "city")}
              onFocus={() => onFocus("cityIsFocused")}
              onBlur={() => onBlur("cityIsFocused")}
              style={
                state.cityIsFocused ? styles.textInputFocused : styles.textInput
              }
            />
          </View> */}
          <TouchableOpacity
            onPress={onSubmit}
            style={{
              width: "100%",
              justifyContent: "center",
              flexDirection: "row",
              height: 60,
              marginTop: 10,
              alignItems: "center",
              backgroundColor: "#25D366",
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{ color: "#ffffff", fontWeight: "bold", fontSize: 25,fontFamily:FONT }}
              >
                Sent Message
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    height: 40,
    fontFamily:FONT
  },
  textInputFocused: {
    borderBottomColor: "#25D366",
    borderBottomWidth: 3,
    height: 40,
  },
});
