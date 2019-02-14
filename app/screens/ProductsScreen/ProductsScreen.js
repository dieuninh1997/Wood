import React, { Component } from 'react';
import {
  Text, View, TouchableWithoutFeedback,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from '../../libs/reactSizeMatter/scalingUtils';

import styles from '../../styles/screens/ProductsScreen';


class ProductsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const headerTitle = navigation.state.params ? navigation.state.params.name : '';
      return {
        title: `${headerTitle}`,
        headerLeft: (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons name="ios-arrow-back" style={styles.iconBack} />
          </TouchableWithoutFeedback>

        ),
      };
    };

    render() {
      return (
        <View />
      );
    }
}
export default ProductsScreen;
