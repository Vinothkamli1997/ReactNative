import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OrderHistoryDishListCell from './OrderHistoryDishListCell';

const OrderHistoryScreenCell = () => {
  const dishLis = [
    {name: 'Special cake'},
    {name: 'Black Forest'},
    {name: 'White Forest'},
    {name: 'Mom Specail Ckae'},
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'lightgray',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View style={{padding: 10}}>
          <Image
            source={require('../../assets/images/Buddha.jpeg')}
            style={{width: 60, height: 60, borderRadius: 20}}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexGrow: 1,
          }}>
          <View style={{gap: 20, justifyContent: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              Elite Cakes
            </Text>
            <Text style={{fontSize: 12, color: 'gray'}}>23-10-07 11-32-43</Text>
          </View>

          <View style={{gap: 8, paddingHorizontal: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                width: 130,
                alignItems: 'center',
                padding: 5,
              }}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>
                Order Accepted from kitche
              </Text>
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'red', fontSize: 14}}>View menu</Text>
              <AntDesign name={'caretright'} size={12} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={dishLis}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <OrderHistoryDishListCell dishNmae={item.name} />
          )}
        />
      </View>
    </View>
  );
};

export default OrderHistoryScreenCell;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 1.0,

    elevation: 5,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 15,
    bottom: 10,
  },
});
