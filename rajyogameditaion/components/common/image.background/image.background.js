import React from 'react'
import { View, StyleSheet, StatusBar, ImageBackground, KeyboardAvoidingView } from 'react-native'

import { DEVICE_HEIGHT, DEVICE_WIDTH, WINDOW_HEIGHT } from './../../../constants/device.configuration'
import { Header } from '@react-navigation/stack'
import { ScrollView } from 'react-native-gesture-handler'

export default function MyImageBackground(props) {
    return (

        <ImageBackground
            style={styles.backgroundImage}
            source={require("./../../../assets/images/bg.jpg")}>
            {props.children}
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    }
})