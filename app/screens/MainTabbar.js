import React, { Component } from 'react';
import {
  View, Text, SafeAreaView, TouchableOpacity, Image,
} from 'react-native';
import _ from 'lodash';
import ScaledSheet from '../libs/reactSizeMatter/ScaledSheet';

export default class MainTabbar extends Component {
  renderMenu(menuName, index, mainIndex = -1) {
    let icon = '';
    let icon_active = '';
    let label = '';

    switch (menuName) {
    case 'home':
      icon = require('../assets/images/ic_home_not_active.png');
      icon_active = require('../assets/images/ic_home.png');
      label = 'Home';
      routeName = 'HomeScreen';
      break;
    case 'categor':
      icon = require('../assets/images/ic_home_not_active.png');
      icon_active = require('../assets/images/ic_home.png');
      label = 'Category';
      routeName = 'CategoryScreen';
      break;
    default:
      break;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.menuContainer}
        onPress={() => {}}
      >
        <Image
          style={styles.menuIcon}
          source={index === mainIndex ? icon_active : icon}
        />
        <Text style={[styles.menuLabel, index === mainIndex ? styles.menuLabel_active : {}]}>{label}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    const { routes } = navigation.state;

    const lastRoute = _.last(routes[0].routes);
    const mainRoutes = lastRoute;
    let mainIndex = -1;
    if (mainRoutes) {
      mainIndex = mainRoutes.index;
    }

    return (
      <View style={styles.wrapper}>
        <SafeAreaView>
          <View style={styles.container}>
            {this.renderMenu('home', 0, mainIndex)}
            {this.renderMenu('categor', 1, mainIndex)}
            {this.renderMenu('car', 2, mainIndex)}
            {this.renderMenu('reque', 3, mainIndex)}
            {this.renderMenu('my', 4, mainIndex)}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  wrapper: {
    elevation: 2,
  },
  container: {
    height: '64@s',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  menuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
});
