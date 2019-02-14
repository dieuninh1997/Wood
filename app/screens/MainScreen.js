import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen/HomeScreen';

const MainScreen = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Home',
    }),
  },
  CategorScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Categor',
    }),
  },
  CarScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Car',
    }),
  },
  RequeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Reque',
    }),
  },
  MyScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'My',
    }),
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'HomeScreen') {
        focused ? (iconName = require('../assets/images/ic_home.png')) : (iconName = require('../assets/images/ic_home_not_active.png'));
      } else if (routeName === 'CategorScreen') {
        focused ? (iconName = require('../assets/images/ic_home.png')) : (iconName = require('../assets/images/ic_home_not_active.png'));
      } else if (routeName === 'CarScreen') {
        focused ? (iconName = require('../assets/images/ic_home.png')) : (iconName = require('../assets/images/ic_home_not_active.png'));
      } else if (routeName === 'RequeScreen') {
        focused ? (iconName = require('../assets/images/ic_home.png')) : (iconName = require('../assets/images/ic_home_not_active.png'));
      } else if (routeName === 'MyScreen') {
        focused ? (iconName = require('../assets/images/ic_home.png')) : (iconName = require('../assets/images/ic_home_not_active.png'));
      }

      return <Image resizeMode="contain" style={{ width: 15, height: 15 }} source={iconName} />;
    },
    gesturesEnabled: false,
  }),
  lazy: true,
  tabBarComponent: () => null,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#aa6a01',
    style: {
      height: 50,
    },
    labelStyle: {
      fontSize: 13,
    },
  },
  animationEnabled: true,
  swipeEnabled: false,
  initialRouteName: 'HomeScreen',
});
