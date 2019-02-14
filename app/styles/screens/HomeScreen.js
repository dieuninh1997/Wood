import { StyleSheet } from 'react-native';
import ScaledSheet from '../../libs/reactSizeMatter/ScaledSheet';

export default ScaledSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },

  headerImage: {
    width: '100%',
    height: '150@s',
  },

  menuHeaderContainer: {
    marginTop: '20@s',
    marginBottom: '25@s',
  },

  // menu header
  menuHeaderItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20@s',
    paddingLeft: '10@s',
  },

  menuHeaderItemCircle: {
    borderRadius: '25@s',
    width: '50@s',
    height: '50@s',
    backgroundColor: '#f5a623',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuHeaderItemIcon: {
    width: '25@s',
    height: '25@s',
  },

  menuHeaderItemName: {
    color: '#4a4a4a',
    fontSize: '14@s',
  },

  content: {
    paddingHorizontal: '10@s',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  titleLeftText: {
    fontSize: '17@s',
    color: '#4a4a4a',
  },

  titleRightText: {
    fontSize: '14@s',
    color: '#4a4a4a',
  },

  // menu living
  menuLivingContainer: {
    marginTop: '10@s',
    marginBottom: '30@s',
  },

  menuLivingItemContainer: {
    marginBottom: '10@s',
    height: '220@s',
    flex: 1,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },

  menuLivingItemThumbnai: {
    width: '172@s',
    height: '120@s',
  },

  thumbnai: {
    width: '100%',
    height: '100%',
  },

  menuLivingItemInfo: {
    flex: 1,
    paddingTop: '5@s',
    paddingLeft: '10@s',
  },

  menuLivingItemName: {
    color: '#4a4a4a',
    fontSize: '14@s',
  },

  menuLivingItemPriceSale: {
    color: '#f5a623',
    fontSize: '16@s',
  },

  menuLivingItemPrice: {
    color: '#9b9b9b',
    fontSize: '12@s',
    textDecorationLine: 'line-through',
  },

  menuLivingItemCompany: {
    color: '#4a4a4a',
    fontSize: '12@s',
    marginTop: '10@s',
  },

  thumbnaiTop: {
    width: '100%',
    height: '150@s',
    marginBottom: '10@s',
  },
});
