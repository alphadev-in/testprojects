import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "./../../components/common/header/header";
import Icon from "react-native-vector-icons/AntDesign";

import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const windowWidth = wp("100%");
const windowHeight = hp("100%");
import { AsyncStorage } from "react-native";
import { ScrollView } from "react-native";
import { colors } from "../../constants/colors";
import {FONT} from "../../utils/server/utils"

export default function RajyogaMedication(props) {
  useEffect(() => {
    props.getVideos();
    props.getHomeImages();
  }, []);

  const [videoId, setVideoId] = useState("");

  const [viewDetails, setViewDetails] = useState({
    viewWidth: "",
    viewHeight: "",
  });

  const redirectTo = (id) => {
    if (id == 1) {
      props.navigation.navigate("Murli");
    }
    if (id == 2) {
      props.navigation.navigate("Medication");
    }
    if (id == 3) {
      props.navigation.navigate("GitaGayan");
    }
    if (id == 4) {
      props.navigation.navigate("Knowledge");
    }
  };

  const [isFullScreen, setIsFullScreen] = useState(false);

  const onLayout = (event) => {
    setViewDetails({
      ...viewDetails,
      viewHeight: event.nativeEvent.layout.height,
      viewWidth: event.nativeEvent.layout.width,
    });
  };

  const onChangeFullscreen = (event) => {
    // setIsFullScreen(event.isFullscreen);
  };

  const setVideo = (id) => {
    props.navigation.navigate("Youtube", {
      id: id,
    });
  };

  const _renderItem = (item) => {
    var videoId = item.item.video.split("=")[1];

    return (
      <SafeAreaView onLayout={onLayout}>
        <TouchableOpacity onPress={() => setVideo(videoId)}>
          <View
            style={{
              height: 220,
              position: "relative",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "80%",
                overflow: "hidden",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "white",
              }}
              source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
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
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <React.Fragment>
      <Header title="Rajyoga Meditation" {...props} />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.carousel}>
            <Carousel
              data={props.videos.data}
              sliderWidth={windowWidth}
              itemWidth={windowWidth - 100}
              renderItem={_renderItem}
              firstItem={1}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("RajYogaCourse")}
          >
            <View style={styles.mainBox}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  color: "#ffffff",
                  fontFamily:FONT
                }}
              >
                FREE
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#ffffff",
                  fontFamily:FONT
                }}
              >
                7 Days Rajyoga Meditation Course
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.boxses}>
            {props.homeImages &&
              props.homeImages.data &&
              props.homeImages.data.map((data, index) => {
                return (
                  <TouchableOpacity
                    style={styles.box}
                    onPress={() => redirectTo(data.id)}
                  >
                    <Text style={styles.imageText}>{data.title}</Text>
                    <Image
                      style={styles.image}
                      source={{
                        uri: `http://bkteam.aeliusventure.com/assets/uploads/${data.image}`,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.phone}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ContactUs")}
        >
          <Icon name="message1" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    justifyContent: "space-evenly",
  },
  carousel: {},
  logo: {
    width: 250,
    height: 250,
    borderRadius: 100,
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  mainBox: {
    width: "100%",
    backgroundColor: colors.pinkColor,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boxses: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 10,
  },
  box: {
    width: "47%",
    margin: 5,
    borderRadius: 10,
    height: 180,
    position: "relative",
    // border: '1px solid #000000',
  },
  image: {
    width: "100%",
    margin: 2,
    borderRadius: 10,
    height: 180,
    // border: '1px solid #000000',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  imageText: {
    position: "absolute",
    zIndex: 1,
    bottom: 10,
    left: 20,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily:FONT
  },
  phone: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "green",
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
  },
  iconStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
