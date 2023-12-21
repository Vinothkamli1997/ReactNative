import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import OrderSummaryDishListSection from '../../components/orderSummaryScreenCells/OrderSummaryDishListSection';
import {FlatList} from 'react-native';
import TrackOrderStatusSection from '../../components/orderSummaryScreenCells/TrackOrderStatusSection';

const OrderSummaryScreen = () => {
  const summarydishList = [
    {
      dishName: 'Black Forest',
      dishPrice: '200',
      addOn: [
        {
          addOnName: 'Mango',
          dishPrice: '200',
        },
        {
          addOnName: 'Apple',
          dishPrice: '3500',
        },
        {
          addOnName: 'White',
          dishPrice: '790',
        },
        {
          addOnName: 'Black Forest',
          dishPrice: '334',
        },
      ],
    },
    {
      dishName: 'Black Forest',
      dishPrice: '3500',
      addOn: [
        {
          addOnName: 'Mango',
          dishPrice: '200',
        },
        {
          addOnName: 'Apple',
          dishPrice: '3500',
        },
      ],
    },
    {
      dishName: 'Black Forest',
      dishPrice: '790',
      addOn: [],
    },
    {
      dishName: 'Black Forest',
      dishPrice: '334',
      addOn: [
        {
          addOnName: 'Mango',
          dishPrice: '200',
        },
      ],
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection title={'Order Summary'} />
      <View>
        <FlatList
          data={summarydishList}
          renderItem={({item}) => (
            <OrderSummaryDishListSection
              dishNmae={item.dishName}
              dishPrice={item.dishPrice}
              addOnDishList={item.addOn}
            />
          )}
        />
      </View>

      <View style={{marginTop: 10}}>
        <FlatList
          data={summarydishList}
          horizontal
          renderItem={({item, index}) => (
            <TrackOrderStatusSection
              index={index}
              list={summarydishList}
              name={item.dishName}
            />
          )}
        />
      </View>
    </View>
  );
};

export default OrderSummaryScreen;

const styles = StyleSheet.create({});
