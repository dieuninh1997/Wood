import React, { Component } from 'react';
import {
  Text, View, Image, FlatList, ScrollView, TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';

import styles from '../../styles/screens/HomeScreen';
import { scale } from '../../libs/reactSizeMatter/scalingUtils';

export default class HomeScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

    menuHeader = [
      {
        image: require('../../assets/images/ic_percent.png'),
        name: 'Sale',
      },
      {
        image: require('../../assets/images/ic_gift.png'),
        name: 'Gift',
      },
      {
        image: require('../../assets/images/ic_lightning.png'),
        name: 'Deal',
      },
      {
        image: require('../../assets/images/ic_security.png'),
        name: 'Guarantee',
      },
      {
        image: require('../../assets/images/ic_group.png'),
        name: 'Discount',
      },
      {
        image: require('../../assets/images/ic_group.png'),
        name: 'Discount',
      },
      {
        image: require('../../assets/images/ic_group.png'),
        name: 'Discount',
      },
      {
        image: require('../../assets/images/ic_group.png'),
        name: 'Discount',
      },
    ];

    menuLiving = [
      {
        thumbnai: require('../../assets/images/img_living1.png'),
        name: 'Furniture name 1',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company',
      },
      {
        thumbnai: require('../../assets/images/img_living2.png'),
        name: 'Furniture name 2',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC',
      },
      {
        thumbnai: require('../../assets/images/img_living3.png'),
        name: 'Furniture name 3',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company',
      },
      {
        thumbnai: require('../../assets/images/img_living4.png'),
        name: 'Furniture name 4',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC',
      },

    ];

    menuDining = [
      {
        thumbnai: require('../../assets/images/img_dining1.png'),
        name: 'Furniture name 1',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company',
      },
      {
        thumbnai: require('../../assets/images/img_dining2.png'),
        name: 'Furniture name 2',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC',
      },
      {
        thumbnai: require('../../assets/images/img_dining3.png'),
        name: 'Furniture name 3',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company',
      },
      {
        thumbnai: require('../../assets/images/img_dining4.png'),
        name: 'Furniture name 4',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC',
      },

    ];

    _renderItemMenuHeader = ({ item }) => (
      <TouchableOpacity
        style={styles.menuHeaderItemContainer}
        onPress={() => {}}
        activeOpacity={0.7}
      >
        <View style={styles.menuHeaderItemCircle}>
          <Image
            resizeMode="contain"
            style={styles.menuHeaderItemIcon}
            source={item.image}
          />
        </View>
        <Text style={styles.menuHeaderItemName}>{item.name}</Text>
      </TouchableOpacity>
    )

    _renderItemMenuLiving = ({ item, index }) => (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={[styles.menuLivingItemContainer, index % 2 !== 0 ? { marginLeft: 5 } : { marginRight: 5 }]}
      >
        <View style={styles.menuLivingItemThumbnai}>
          <Image
            resizeMode="contain"
            style={styles.thumbnai}
            source={item.thumbnai}
          />
        </View>
        <View style={styles.menuLivingItemInfo}>
          <Text style={styles.menuLivingItemName}>{item.name}</Text>
          <Text style={styles.menuLivingItemPriceSale}>{item.price_sale}</Text>
          <Text style={styles.menuLivingItemPrice}>{item.price}</Text>
          <Text style={styles.menuLivingItemCompany}>{item.company}</Text>
        </View>
      </TouchableOpacity>
    )

    _keyExtractor = (item, index) => `${item} ${index}`;

    _renderSwiperHeader = () => (
      <Swiper
        style={styles.swiperContainer}
        activeDotColor="#f5a623"
        dotColor="#ffffff"
        paginationStyle={{ bottom: scale(5) }}
        autoplay
      >
        <Image style={styles.headerImage} source={require('../../assets/images/img_banner.png')} />
        <Image style={styles.headerImage} source={require('../../assets/images/img_diningTop.png')} />
      </Swiper>
    )

    render() {
      return (
        <ScrollView>
          <View style={styles.container}>
            {this._renderSwiperHeader()}

            {/* menu header */}
            <View style={styles.menuHeaderContainer}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.menuHeader}
                renderItem={this._renderItemMenuHeader}
                keyExtractor={this._keyExtractor}
              />
            </View>
            <View style={styles.content}>
              {/* live room furniture */}
              <View style={styles.titleContainer}>
                <Text style={styles.titleLeftText}>Living room furniture</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                  <Text style={styles.titleRightText}>More</Text>
                </TouchableOpacity>
              </View>
              {/* menu living */}
              <View style={styles.menuLivingContainer}>
                <FlatList
                  numColumns={2}
                  data={this.menuLiving}
                  renderItem={this._renderItemMenuLiving}
                  keyExtractor={this._keyExtractor}
                />
              </View>


              {/* dining room furniture */}
              <View style={[styles.titleContainer, { marginTop: 10 }]}>
                <Text style={styles.titleLeftText}>Dining room furniture</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                  <Text style={styles.titleRightText}>More</Text>
                </TouchableOpacity>
              </View>
              {/* menu dining */}
              <View style={styles.menuLivingContainer}>
                <Swiper
                  paginationStyle={{ bottom: scale(15) }}
                  style={[styles.swiperContainer, { marginBottom: scale(10) }]}
                  activeDotColor="#f5a623"
                  dotColor="#ffffff"
                  autoplay
                >
                  <Image style={styles.thumbnaiTop} source={require('../../assets/images/img_diningTop.png')} />
                  <Image style={styles.thumbnaiTop} source={require('../../assets/images/img_banner.png')} />
                </Swiper>

                <FlatList
                  numColumns={2}
                  data={this.menuDining}
                  renderItem={this._renderItemMenuLiving}
                  keyExtractor={this._keyExtractor}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
}
