import React, { Component } from 'react';
import {
  View, Animated, Easing,
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Screens from './app/screens/Screens';
import MainTabbar from './app/screens/MainTabbar';

const App = createStackNavigator(
  Screens,
  {
    headerMode: 'screen',
    cardStyle: { opacity: 1 },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

const AppWithTabbar = createBottomTabNavigator(
  { App }, {
    tabBarPosition: 'bottom',
    tabBarComponent: MainTabbar,
  },
);

const Tabbar = createAppContainer(AppWithTabbar);
export default class Root extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabbar />
      </View>
    );
  }
}
