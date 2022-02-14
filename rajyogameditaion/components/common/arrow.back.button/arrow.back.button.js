import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from './../../../constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ArrowBackButton(props) {
    const { onPress } = props
    return (
        <TouchableOpacity onPress={() =>
            props.navigation.goBack()
        }>
            <View style={styles.arrowButton}>
                <Icon
                    name="arrowleft"
                    style={styles.arrow}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    arrowButton: {
        borderColor: colors.textColor,
        borderWidth: 5,
        borderRadius: 100,
        padding: 5,
        marginTop: 10,
        top: 0,
        left: 20,
        width: 40,
        zIndex: 100
    },
    arrow: {
        fontSize: 20,
        color: colors.textColor,
        fontWeight: "bold"
    }

})
