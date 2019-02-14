import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from '../libs/reactSizeMatter/scalingUtils';
import HomeScreen from './HomeScreen/HomeScreen';
import CategoryScreen from './Category/CategoryScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Category: CategoryScreen,
  Cart: CategoryScreen,
  Request: CategoryScreen,
  Account: CategoryScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
      case 'Home':
        iconName = 'ios-home';
        break;
      case 'Category':
        iconName = 'ios-home';
        break;
      case 'Cart':
        iconName = 'ios-home';
        break;
      case 'Request':
        iconName = 'ios-home';
        break;
      case 'Account':
        iconName = 'ios-home';
        break;
      default:
        break;
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={scale(25)} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#aa6a01',
    style: {
      backgroundColor: 'transparent',
    },
    labelStyle: {
      fontSize: scale(12),
    },
  },
});

export default createAppContainer(TabNavigator);
