import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../Constants/Colors';

const CouponSection = ({couponName}) => {
  return (
    <View style={{width: '100%', margin: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <View
          style={{
            width: 200,
            padding: 10,
            backgroundColor: '#CAE3DC',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderStyle: 'dashed',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'white',
              left: -20,
              borderRadius: 15,
            }}></View>
          <Text style={{color: 'black', fontSize: 14}}>{couponName}</Text>
          <View
            style={{
              width: 30,
              height: 30,
              justifyContent: 'space-between',
              backgroundColor: 'white',
              right: -20,
              borderRadius: 15,
            }}></View>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: color.primaryColor,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '90%',
          marginTop: 10,
          gap: 20,
          flexDirection: 'row',
        }}>
        <View style={{width: '80%'}}>
          <Text style={{textAlign: 'center'}}>
            There are two ways to figure out plate costs, either by target
            percentage (so dividing total ingredient cost by target cost
            percentage) or by a target menu price to determine food cost
            percentage (dividing total ingredient cost by target menu price)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CouponSection;

const styles = StyleSheet.create({});
