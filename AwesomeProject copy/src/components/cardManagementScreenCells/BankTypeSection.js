import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BankTypeSection = ({bankType}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: 90,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/Buddha.jpeg')}
          style={{width: 70, height: 70, borderRadius: 40}}
        />
        <Text style={{textAlign: 'center', color: 'black'}}>{bankType}</Text>
      </View>
    </View>
  );
};

export default BankTypeSection;

const styles = StyleSheet.create({});
