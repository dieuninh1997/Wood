import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class MainTabbar extends Component {
    shouldRenderShadow = true;

  shouldComponentUpdate(nextProps, nextState) {
    const lastRoute = _.last(this.props.navigation.state.routes[0].routes);
    const nextLastRoute = _.last(nextProps.navigation.state.routes[0].routes);

    if (lastRoute.routeName !== 'MainScreen' && nextLastRoute.routeName !== 'MainScreen') {
      this.shouldRenderShadow = false;
      return false;
    }

    if (lastRoute.routeName !== nextLastRoute.routeName) {
      if (!this.shouldRenderShadow) {
        setTimeout(() => {
          this.shouldRenderShadow = true;
          this.forceUpdate();
        }, 5000);
      }
      return true;
    }

    if (lastRoute.routeName === nextLastRoute.routeName && lastRoute.index !== nextLastRoute.index) {
      this.shouldRenderShadow = true;
      return true;
    }

    this.shouldRenderShadow = false;
    return false;
  }

    renderMenu(menuName, index, mainIndex = -1){
        const { navigation } = this.props;

        let icon = '';
        let icon_active = '';
        let label = '';
        let routeName = '';
        let routeParams = {};

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
              label = 'Categor';
              routeName = 'HomeScreen';
              break;
            case 'car':
              icon = require('../assets/images/ic_home_not_active.png');
              icon_active = require('../assets/images/ic_home.png');
              label = 'Car';
              routeName = 'HomeScreen';
              break;
            case 'reque':
              icon = require('../assets/images/ic_home_not_active.png');
              icon_active = require('../assets/images/ic_home.png');
              label = 'Reque';
              routeName = 'HomeScreen';
              break;
            case 'my':
              icon = require('../assets/images/ic_home_not_active.png');
              icon_active = require('../assets/images/ic_home.png');
              label = 'My';
              routeName = 'HomeScreen';
              break;
            default:
                break;
        }

        return (
            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.menuContainer} 
                onPress={() => navigation.navigate(routeName, routeParams)}
            >
                <Image 
                    style={styles.menuIcon} 
                    source={ index === mainIndex ? icon_active : icon }
                />
                <Text style={[styles.menuLabel, index === mainIndex ? styles.menuLabel_active : {}]}>{label}</Text>
            </TouchableOpacity>
        );
    }

    render(){
        const { navigation } = this.props;
        const { routes } = navigation.state;

        const lastRoute = _.last(routes[0].routes);
        const mainRoutes = lastRoute;
        let mainIndex = -1;
        if(mainRoutes){
            mainIndex = mainRoutes.index;
        }

        return (
            <View style={ styles.wrapper }>
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

const styles = StyleSheet.create({
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
    }
});