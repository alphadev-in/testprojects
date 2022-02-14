import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';
import {colors} from '../../constants/colors';
import Header from './../../components/common/header/header';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Geeta(props) {
  useEffect(() => {
    props.getGitaGyan();
  }, []);

  const playVideo = id => {
    props.navigation.navigate('Youtube', {
      id: id,
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header {...props} title="God of Geeta" />
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        {props.gitaGayan &&
          props.gitaGayan.data &&
          props.gitaGayan.data.map((data, index) => {
            var videoId = data.video.split('=')[1];
            return (
              <View style={{paddingTop: 10, paddingBottom: 10}}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={{paddingTop: 5, paddingBottom: 5}}>
                  {data.content}
                </Text>
                {data.video ? (
                  <TouchableOpacity onPress={() => playVideo(videoId)}>
                    <View
                      style={{
                        height: 200,
                        backgroundColor: 'gray',
                        position: 'relative',
                      }}>
                      <Image
                        style={{width: '100%', height: 200}}
                        source={{
                          uri: `https://img.youtube.com/vi/${videoId}/0.jpg`,
                        }}
                      />
                      <Icon
                        name="play"
                        style={{
                          position: 'absolute',
                          left: '40%',
                          top: '40%',
                          fontSize: 45,
                          color: 'red',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  video: {
    backgroundColor: 'red',
    height: 150,
    width: '100%',
  },
});
