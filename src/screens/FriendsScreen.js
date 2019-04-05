import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../components/Header'
import { ProgressBar } from '../components/ProgressBar'
import Friends from '../components/Friends'

export default class FriendsScreen extends Component {

  state = {
    progress: 0
  }

  percentage() {
    if (this.state.progress === 0) {
      this.stopProgress = setInterval(() => {
        this.setState({
          progress: this.state.progress + 1
        }, () => {
          if (this.state.progress == 100) {
            clearInterval(this.stopProgress)
          }
        })
      }, 50)
    }
  }

  componentDidMount() {
    this.percentage()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header percentage={this.state.progress} />
        <ProgressBar progress={this.state.progress} />
        <Friends/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#fff',
  }
});
