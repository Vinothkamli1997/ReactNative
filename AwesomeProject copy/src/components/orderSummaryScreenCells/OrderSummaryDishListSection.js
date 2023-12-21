import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OrderHistoryAddOnListCell from '../orderHistoryScreenCells/OrderHistoryAddOnListCell';
import {Divider} from 'react-native-paper';

const OrderSummaryDishListSection = ({dishNmae, dishPrice, addOnDishList}) => {
  return (
    <View style={{width: '100%', marginTop: 8}}>
      <View style={{paddingHorizontal: 8, flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/vegImage.png')}
          style={{width: 25, height: 25}}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexGrow: 1,
          }}>
          <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
            1x {dishNmae}
          </Text>
          <Image
            source={require('../../assets/images/CakeImage.jpg')}
            style={{width: 25, height: 25, borderRadius: 5}}
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexGrow: 1,
          marginHorizontal: 10,
        }}>
        <Text style={styles.commonStyle}>1x {dishPrice}</Text>
        <Text style={styles.commonStyle}>${dishPrice}</Text>
      </View>

      <View style={{marginHorizontal: 10}}>
        <FlatList
          data={addOnDishList}
          renderItem={({item}) => (
            <OrderHistoryAddOnListCell
              dishNmae={item.addOnName}
              dishPrice={item.dishPrice}
            />
          )}
        />
      </View>
      <Divider
        style={{
          marginHorizontal: 5,
          height: 1,
          backgroundColor: 'gray',
          marginTop: 5,
        }}
      />
    </View>
  );
};

export default OrderSummaryDishListSection;

const styles = StyleSheet.create({
  commonStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
