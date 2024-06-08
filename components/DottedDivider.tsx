import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const DottedDivider = () => <View style={styles.container} />


export default DottedDivider

const styles = StyleSheet.create({
    container: {
        height: 0.1,
        width: '100%',
        borderRadius: 1,
        borderWidth: 0.5,
        borderColor: '#C6C5CA',
        borderStyle: 'dotted'
    }
})