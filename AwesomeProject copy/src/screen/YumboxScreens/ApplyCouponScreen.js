import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import CouponSection from '../../components/applyCouopnScreenCells/CouponSection';

const ApplyCouponScreen = () => {
  const couponList = [
    {
      name: 'Welcome',
    },
    {
      name: 'Middle',
    },
    {
      name: 'Offline',
    },
    {
      name: 'Online',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection title={'Apply Coupon'} />
      <View style={{width: '100%', backgroundColor: 'lightgray', padding: 8}}>
        <Text>AVAILABLE COUPONS</Text>
      </View>
      <FlatList
        data={couponList}
        renderItem={({item}) => <CouponSection couponName={item.name} />}
      />
    </View>
  );
};

export default ApplyCouponScreen;

const styles = StyleSheet.create({});
