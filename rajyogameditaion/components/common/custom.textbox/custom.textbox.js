import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Colors, { colors } from './../../../constants/colors'
import {DEVICE_WIDTH } from './../../../constants/device.configuration'

export default function CustomTextBox(props) {
    const { placeholder, secureTextEntry,onSubmitEditing,ref,focus } = props
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            onSubmitEditing = {onSubmitEditing}
            ref = {ref}
            autoFocus = {focus}
            placeholderTextColor = {colors.textColor}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: colors.primaryColor,
        borderBottomWidth: 3,
        color:colors.textColor,
        padding: 0,
        height:40,
        width:DEVICE_WIDTH - 10,
       
        fontSize:15
    }
})
