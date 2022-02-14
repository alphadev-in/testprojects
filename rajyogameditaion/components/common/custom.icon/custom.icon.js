import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from './../../../constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CustomIcon(props) {
    const { onPress, icon } = props
    return (

        <View style={styles.arrowButton}>
            <Icon
                name={icon}
                style={styles.arrow}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    arrowButton: {
        borderColor: colors.primaryColor,
        borderWidth: 5,
        borderRadius: 100,
        padding: 20,
        marginTop: 10
    },
    arrow: {
        fontSize: 50,
        color: colors.primaryColor,
        fontWeight: "bold"
    }

})
