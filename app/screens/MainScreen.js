import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from '../libs/reactSizeMatter/scalingUtils';
import HomeScreen from './HomeScreen/HomeScreen';
import CategoryScreen from './Category/CategoryScreen';
import ProductsScreen from './ProductsScreen/ProductsScreen';

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProductsScreen: {
    screen: ProductsScreen,
  },
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'screen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f5f5f5',
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
    headerTintColor: '#4a4a4a',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: scale(20),
    },
  },
});
const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
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
