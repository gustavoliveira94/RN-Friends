import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = props => {

  const { percentage } = props

  return (
    <View style={styles.container}>
      <Text style={styles.percentage}>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: 20,
    backgroundColor: '#00aaa9',
  },
  percentage: {
    textAlign: 'right',
    color: '#fff',
    fontWeight: '400',
    fontSize: 18
  }
});
