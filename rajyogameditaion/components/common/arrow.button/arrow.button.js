import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from './../../../constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ArrowButton(props) {
    const {onPress} = props
    return (
        <TouchableOpacity onPress = {() => onPress()}>
            <View style={styles.arrowButton}>
                <Icon
                    name="arrowright"
                    style={styles.arrow}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    arrowButton: {
        borderColor: colors.primaryColor,
        borderWidth: 5,
        borderRadius: 100,
        padding: 5,
        marginTop: 10
    },
    arrow: {
        fontSize: 20,
        color: colors.primaryColor,
        fontWeight: "bold"
    }

})
