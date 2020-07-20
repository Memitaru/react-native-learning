import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../constants/colors'

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title ? props.title : "Default"}</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    },
    headerTitle: {
        color: 'black',
        fontSize: 25
    }
})

export default Header