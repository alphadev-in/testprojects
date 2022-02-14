import React from 'react'
import { Button,StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from './../../../constants/colors'
import {DEVICE_WIDTH } from './../../../constants/device.configuration'

export default function CustomButton(props) {
    const {title,onPress} = props
    return (
        <TouchableOpacity style = {styles.button} onPress = {onPress}>
            <Text style = {styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button : {
        backgroundColor:"transparent",
        justifyContent:"center",
        alignItems:"center",
        padding:8,
        backgroundColor : colors.primaryColor,
        width:DEVICE_WIDTH - 10
    },
    buttonText : {
        color:"#ffffff",
        fontWeight:"bold",
        fontSize:15
    }
})
