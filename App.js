import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FriendsScreen from './src/screens/FriendsScreen'
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FriendsScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
  }
})