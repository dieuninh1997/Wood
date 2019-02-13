import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';

import styles from '../../styles/screens/HomeScreen';

export class HomeScreen extends Component {
    _renderItem = (item) => {
        return (
            <View>

            </View>
        );
    }
    
    render() {
        return (
            <View style={ styles.container }>
                <Image style={ styles.headerImage } source={require('../../assets/images/drawable-hdpi/bitmap.png')}/>
                {/* menu */}
                <View>
                    <FlatList 
                        horizontal
                        data={[
                            'Sale',
                            'Gift',
                            'Deal',
                            'Guarantee',
                            'Discount'
                        ]}
                        renderItem={ this._renderItem }
                    />
                </View>
            </View>
        );
    }
}
export default HomeScreen;