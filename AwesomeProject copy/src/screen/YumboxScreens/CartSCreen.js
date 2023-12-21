import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CenterTitle from '../../components/homeScreen/CenterTitle';
import CartScreenHeaderSection from '../../components/cartScreenCells/CartScreenHeaderSection';
import CartDishListCell from '../../components/cartScreenCells/CartDishListCell';
import AddressSectionCell from '../../components/cartScreenCells/AddressSectionCell';
import DateTimeSection from '../../components/cartScreenCells/DateTimeSection';
import CustomInstructionSection from '../../components/cartScreenCells/CustomInstructionSection';
import OrderPriceDetailsSection from '../../components/cartScreenCells/OrderPriceDetailsSection';

const CartSCreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CenterTitle title={'Cart'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartScreenHeaderSection />
        <CartDishListCell />
        <AddressSectionCell />
        <DateTimeSection />
        <CustomInstructionSection />
        <OrderPriceDetailsSection />
      </ScrollView>
    </View>
  );
};

export default CartSCreen;

const styles = StyleSheet.create({});
