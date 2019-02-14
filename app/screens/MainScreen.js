import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen/HomeScreen';
import CategoryScreen from './Category/CategoryScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Category: CategoryScreen,
  Cart: CategoryScreen,
  Request: CategoryScreen,
  Account: CategoryScreen,
});

export default createAppContainer(TabNavigator);
