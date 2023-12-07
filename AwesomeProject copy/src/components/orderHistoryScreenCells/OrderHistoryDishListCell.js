import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OrderHistoryAddOnListCell from './OrderHistoryAddOnListCell';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OrderHistoryDishListCell = ({dishNmae}) => {
  const dishLis = [
    {name: 'Mango', price: 100},
    {name: 'Stawberry', price: 230},
  ];

  return (
    <View
      style={{
        margin: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/vegImage.png')}
          style={{width: 30, height: 30}}
        />
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text>{dishNmae}</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
              $50059
            </Text>
            <AntDesign name={'caretright'} size={12} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{gap: 10}}>
        <FlatList
          data={dishLis}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <OrderHistoryAddOnListCell
              dishNmae={item.name}
              dishPrice={item.price}
            />
          )}
        />
      </View>
    </View>
  );
};

export default OrderHistoryDishListCell;

const styles = StyleSheet.create({});
