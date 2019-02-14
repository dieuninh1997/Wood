import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import MainScreen from './app/screens/MainScreen';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainScreen />
      </View>
    );
  }
}
