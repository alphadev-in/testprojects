import React, { useEffect } from "react";
import { ScrollView, Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Header from "./../../components/common/header/header";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Gallary(props) {
  useEffect(() => {
    props.getGallery();
  }, []);

  const playVideo = (id) => {
    props.navigation.navigate("Youtube", {
      id: id,
    });
  };

  console.log(props.gallary);
  return (
    <View style={{ flex: 1 }}>
      <Header title="Gallary" {...props} />
      <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
        {props.gallary &&
          props.gallary.data &&
          props.gallary.data.map((data, index) => {
            var videoId = data.video.split("=")[1];
            return (
              <TouchableOpacity onPress={() => playVideo(videoId)}>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {data.title}
                  </Text>
                  {data.video ? (
                    <View
                      style={{
                        height: 200,
                        backgroundColor: "gray",
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{ width: "100%", height: 200 }}
                        source={{
                          uri: `https://img.youtube.com/vi/${videoId}/0.jpg`,
                        }}
                      />
                      <Icon
                        name="play"
                        style={{
                          position: "absolute",
                          left: "40%",
                          top: "40%",
                          fontSize: 45,
                          color: "red",
                        }}
                      />
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
