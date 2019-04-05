import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export const ProgressBar = props => {

    const { progress } = props

    return (
        <View>
            <Text style={{width: progress ? (progress+'%') : '1%', backgroundColor: '#FFD200', height: 8}}></Text>
        </View>
    );
}
