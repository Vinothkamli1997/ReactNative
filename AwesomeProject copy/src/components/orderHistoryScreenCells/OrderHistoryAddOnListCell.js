import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderHistoryAddOnListCell = ({dishNmae, dishPrice}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text>{dishNmae}</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>
        ${dishPrice}
      </Text>
    </View>
  );
};

export default OrderHistoryAddOnListCell;

const styles = StyleSheet.create({});
