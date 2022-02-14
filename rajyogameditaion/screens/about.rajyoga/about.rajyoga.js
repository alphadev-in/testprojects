import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, Circu } from "react-native";
import { colors } from "../../constants/colors";
import Header from "./../../components/common/header/header";
import Icon from "react-native-vector-icons/AntDesign";
import YouTube, {
  YouTubeStandaloneAndroid,
  YouTubeStandaloneIOS,
} from "react-native-youtube";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function AboutRajYoga(props) {
  useEffect(() => {
    props.aboutRajyoga();
  }, []);

  const playVideo = (id) => {
    props.navigation.navigate("Youtube", {
      id: id,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="About Rajyoga" {...props} />
      <View style={{ flex: 1 }}>
        {props.aboutRajYogaIsLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView style={{ paddingHorizontal: 20 }}>
            {props.aboutRajYogaList &&
              props.aboutRajYogaList.data.map((data, index) => {
                var videoId = data.video.split("=")[1];

                return (
                  <View>
                    <Text
                      style={{
                        color: colors.primaryColor,
                        fontSize: 20,
                        paddingTop: 10,
                      }}
                    >
                      {data.title}
                    </Text>
                    <Text style={{ paddingTop: 10 }}>{data.content}</Text>
                    {data.video ? (
                      <TouchableOpacity onPress={() => playVideo(videoId)}>
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
                              left: "45%",
                              top: "40%",
                              fontSize: 45,
                              color: "red",
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                );
              })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
    marginTop: 10,
  },
});
