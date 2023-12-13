import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardHeaderSection = () => {
  return (
    <View
      style={{
        width: '95%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 10,
        gap: 8,
        padding: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          Payable Amount
        </Text>
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          $600
        </Text>
      </View>

      <Text style={{textAlign: 'left', color: 'black'}}>
        Your Order will be placed in Waiting Mode, till the time your payment is
        confirmed. you will the time your payment is confiremde. you will
        receive a call from us as your payment reach us. check your order status
        in your profile page under order history.{' '}
      </Text>
    </View>
  );
};

export default CardHeaderSection;

const styles = StyleSheet.create({});
