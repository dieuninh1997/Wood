import React, { Component } from 'react';
import {
  View, Image,
} from 'react-native';
import MainScreen from './app/screens/MainScreen';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: '100%', position: 'absolute', bottom: 0, left: 0,
          }}
          source={require('./app/assets/images/bg_gradient.png')}
        />
        <MainScreen />
      </View>
    );
  }
}
