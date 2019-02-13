import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },

    headerImage: {
        width: '100%',
        height: 150,
    },

    menuHeaderContainer: {
        marginTop: 20,
        marginBottom: 25,
    },

    //menu header
    menuHeaderItemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30,
        paddingLeft: 10,
    },

    menuHeaderItemCircle: {
        borderRadius: 25,
        width: 50,
        height: 50,
        backgroundColor: '#f5a623',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuHeaderItemIcon: {
        width: 25,
        height: 25,
    },

    menuHeaderItemName: {
        color: '#4a4a4a',
        fontSize: 14
    },

    content: {
        paddingHorizontal: 10,
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    titleLeftText: {
        fontSize: 17,
        color: '#4a4a4a'
    },

    titleRightText: {
        fontSize: 14,
        color: '#4a4a4a'
    },

    //menu living
    menuLivingContainer: {
        marginTop: 10,
    },

    menuLivingItemContainer: {
        marginBottom: 10,
        height: 220,
        flex: 1,
        backgroundColor: '#ffffff',
        overflow: 'hidden'
    },

    menuLivingItemThumbnai: {
        width: 172,
        height: 120,
    },

    thumbnai: {
        width: '100%',
        height: '100%',
    },

    menuLivingItemInfo: {
        flex: 1,
        paddingTop: 5,
        paddingLeft: 10,
    },

    menuLivingItemName: {
        color: '#4a4a4a',
        fontSize: 14,
    },

    menuLivingItemPriceSale: {
        color: '#f5a623',
        fontSize: 16,
    },

    menuLivingItemPrice: {
        color: '#9b9b9b',
        fontSize: 12,
        textDecorationLine:'line-through' 
    },

    menuLivingItemCompany: {
        color: '#4a4a4a',
        fontSize: 12,
        marginTop: 10
    },

    thumbnaiTop: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },


});
