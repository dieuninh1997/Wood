import React, { Component } from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';

import styles from '../../styles/screens/HomeScreen';

export default class HomeScreen extends Component {

menuHeader = [
    'Sale',
    'Gift',
    'Deal',
    'Guarantee',
    'Discount',
    'Discount',
    'Discount',
    'Discount',
    'Discount',
    'Discount',
];

menuHeaderItemImages = [
    require('../../assets/images/ic_percent.png'),
    require('../../assets/images/ic_gift.png'),
    require('../../assets/images/ic_lightning.png'),
    require('../../assets/images/ic_security.png'),
    require('../../assets/images/ic_group.png'),
    require('../../assets/images/ic_group.png'),
    require('../../assets/images/ic_group.png'),
    require('../../assets/images/ic_group.png'),
    require('../../assets/images/ic_group.png'),
    require('../../assets/images/ic_group.png')
];

menuLiving = [
    {
        thumbnai: require('../../assets/images/img_living1.png'),
        name: 'Furniture name 1',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company'
    },
    {
        thumbnai: require('../../assets/images/img_living2.png'),
        name: 'Furniture name 2',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC'
    },
    {
        thumbnai: require('../../assets/images/img_living3.png'),
        name: 'Furniture name 3',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company'
    },
    {
        thumbnai: require('../../assets/images/img_living4.png'),
        name: 'Furniture name 4',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC'
    }

];

menuDining = [
    {
        thumbnai: require('../../assets/images/img_diningTop.png'),
        name: '',
        price_sale: '',
        price: '',
        company: ''
    },
    {
        thumbnai: require('../../assets/images/img_dining1.png'),
        name: 'Furniture name 1',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company'
    },
    {
        thumbnai: require('../../assets/images/img_dining2.png'),
        name: 'Furniture name 2',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC'
    },
    {
        thumbnai: require('../../assets/images/img_dining3.png'),
        name: 'Furniture name 3',
        price_sale: '$167',
        price: '$215',
        company: 'AMC company'
    },
    {
        thumbnai: require('../../assets/images/img_dining4.png'),
        name: 'Furniture name 4',
        price_sale: '$167',
        price: '$215',
        company: 'Brian Duncan .,JSC'
    }

];


    _renderItemMenuHeader = ({item, index}) => {
        return (
            <View style={ styles.menuHeaderItemContainer }>
                <View style={ styles.menuHeaderItemCircle }>
                    <Image 
                        resizeMode='contain'
                        style={ styles.menuHeaderItemIcon } 
                        source={this.menuHeaderItemImages[index]}
                    />
                </View>
                <Text style={ styles.menuHeaderItemName }>{item}</Text>
            </View>
        );
    }

    _renderItemMenuLiving = ({item, index}) => {
        return (
            <View style={[styles.menuLivingItemContainer, index % 2 != 0 ? {marginLeft: 5} : {marginRight: 5} ]}>
                <View style={ styles.menuLivingItemThumbnai }>
                    <Image 
                        resizeMode='contain'
                        style={ styles.thumbnai } 
                        source={item.thumbnai}
                    />
                </View>
                <View style={ styles.menuLivingItemInfo }>
                    <Text style={ styles.menuLivingItemName }>{item.name}</Text>
                    <Text style={ styles.menuLivingItemPriceSale }>{item.price_sale}</Text>
                    <Text style={ styles.menuLivingItemPrice }>{item.price}</Text>
                    <Text style={ styles.menuLivingItemCompany }>{item.company}</Text>
                </View>
            </View>
        );
    }
    
    _keyExtractor = (item, index) => `${item} ${index}`;

    render() {
        const topMenuDining = this.menuDining.shift();
        return (
        <ScrollView>
            <View style={ styles.container }>
                <Image style={ styles.headerImage } source={require('../../assets/images/drawable-hdpi/bitmap.png')}/>
                {/* menu header */}
                <View style={ styles.menuHeaderContainer }>
                    <FlatList 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={ this.menuHeader }
                        renderItem={ this._renderItemMenuHeader }
                        keyExtractor={this._keyExtractor}
                    />
                </View>
                <View style={ styles.content }>
                    {/* live room furniture */}
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.titleLeftText }>Living room furniture</Text>
                        <Text style={ styles.titleRightText }>More</Text>
                    </View>
                    {/* menu living */}
                    <View style={ styles.menuLivingContainer }>
                        <FlatList 
                            numColumns={2}
                            data={ this.menuLiving }
                            renderItem={ this._renderItemMenuLiving }
                            keyExtractor={this._keyExtractor}
                        />
                    </View>


                    {/* dining room furniture */}
                    <View style={[styles.titleContainer, {marginTop: 10} ]}>
                        <Text style={ styles.titleLeftText }>Dining room furniture</Text>
                        <Text style={ styles.titleRightText }>More</Text>
                    </View>
                    {/* menu dining */}
                    <View style={ styles.menuLivingContainer }>
                        <Image style={ styles.thumbnaiTop } source={topMenuDining.thumbnai} />
                        <FlatList 
                            numColumns={2}
                            data={this.menuDining}
                            renderItem={ this._renderItemMenuLiving }
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        );
    }
}