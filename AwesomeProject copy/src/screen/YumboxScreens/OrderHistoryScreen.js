import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import OrderHistoryScreenCell from '../../components/orderHistoryScreenCells/OrderHistoryScreenCell';

const OrderHistoryScreen = () => {
  const dishLis = [
    {name: 'kjaadkjfdfbfj'},
    {name: 'kjaadkjfdfbfj'},
    {name: 'kjaadkjfdfbfj'},
    {name: 'kjaadkjfdfbfj'},
  ];

  return (
    <View style={styles.container}>
      <TitleSection title={'Order History'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={dishLis}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <OrderHistoryScreenCell dishNmae={item.name} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
