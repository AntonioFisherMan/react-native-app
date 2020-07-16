import React from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export const AppButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        width:269,
        height:45,
        elevation: 8,
        backgroundColor: '#2A86FF',
        borderRadius: 40
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        
        textTransform: "uppercase",
        fontSize: 16,
        color: '#FFFFFF'
    }
})