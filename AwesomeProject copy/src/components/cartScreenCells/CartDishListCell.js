import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';

const CartDishListCell = () => {
  const [quantity, setQuantity] = useState(1);
  const [dishPrice, setDishPrice] = useState(330);

  const plusMinus = value => {
    if (value > 0) {
      setQuantity(value + 1);
      console.log('value', value);
    }
  };

  const countMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const dishlist = [
    {
      name: 'Black',
      quantity: 2,
      addOn: [
        {
          name: 'Mango',
          price: 210,
        },
        {
          name: 'PineApple',
          price: 390,
        },
        {
          name: 'Apple',
          price: 1900,
        },
        {
          name: 'White',
          price: 2390,
        },
      ],
    },
    {
      name: 'White',
      quantity: 8,
      addOn: [
        {
          name: 'Mango',
          price: 210,
        },
        {
          name: 'PineApple',
          price: 390,
        },
      ],
    },
    {
      name: 'orange',
      quantity: 6,
      addOn: [],
    },
    {
      name: 'Black Forest',
      quantity: 5,
      addOn: [
        {
          name: 'Mango',
          price: 210,
        },
      ],
    },
  ];

  console.log('DishList Addon ', dishlist[0].addOn);

  const addOnList = [
    {
      name: 'Mango',
      price: 210,
    },
    {
      name: 'PineApple',
      price: 390,
    },
    {
      name: 'Apple',
      price: 1900,
    },
    {
      name: 'White',
      price: 2390,
    },
  ];

  return (
    <View
      style={{
        width: '93%',
        padding: 8,
        backgroundColor: '#EEEEEE',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <FlatList
        data={dishlist}
        renderItem={({item}) => (
          <View>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/Buddha.jpeg')}
                style={{width: 60, height: 60, borderRadius: 10}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <View style={{justifyContent: 'space-between', gap: 8}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: 'gray'}}>
                    Simplistic
                  </Text>
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 0,
                      padding: 8,
                      marginHorizontal: 5,
                      marginVertical: 5,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      gap: 10,
                      borderRadius: 10,
                    }}>
                    <TouchableOpacity onPress={() => countMinus()}>
                      <AntDesign name={'minus'} size={18} color={'black'} />
                    </TouchableOpacity>

                    <Text
                      style={{color: color.primaryColor, fontWeight: '600'}}>
                      {item.quantity}
                    </Text>
                    <TouchableOpacity onPress={() => plusMinus(item.quantity)}>
                      <AntDesign name={'plus'} size={18} color={'black'} />
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      textAlign: 'right',
                      marginRight: 5,
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    ${dishPrice}
                  </Text>
                </View>
              </View>
            </View>
            <FlatList
              data={item.addOn}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{item.name}</Text>
                  <Text>${item.price}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CartDishListCell;

const styles = StyleSheet.create({});
