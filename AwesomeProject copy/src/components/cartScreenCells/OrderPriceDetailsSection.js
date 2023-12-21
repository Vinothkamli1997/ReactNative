import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../Constants/Colors';

const OrderPriceDetailsSection = () => {
  return (
    <View style={{width: '93%', alignSelf: 'center', gap: 5, marginBottom: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.common}>Price Total</Text>
        <Text style={styles.common}>$2000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: color.primaryColor}}>Discount</Text>
        <Text style={{color: color.primaryColor, fontWeight: '500'}}>$0</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: color.primaryColor}}>
          Coin Redemprion Discount
        </Text>
        <Text style={{color: color.primaryColor, fontWeight: '500'}}>-$0</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.common}>Total Amount</Text>
        <Text style={styles.common}>$270.0</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.common}>Delivery Charges</Text>
        <Text style={styles.common}>$60</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'green'}}>Delivery Discount</Text>
        <Text style={{color: 'green', fontWeight: '500'}}>-$0</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
          Amount Payable
        </Text>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
          $300
        </Text>
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderStyle: 'dashed',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Redeem Coin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          marginTop: 10,
          backgroundColor: color.primaryColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <Text style={{fontSize: 16, color: 'white'}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderPriceDetailsSection;

const styles = StyleSheet.create({
  common: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '400',
  },
});
