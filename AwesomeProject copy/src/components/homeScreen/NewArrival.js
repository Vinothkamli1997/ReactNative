import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NewArrival = ({item, name, image, price, cakeType, bestPrice}) => {
  return (
    <TouchableOpacity
      style={{paddingHorizontal: 10, bottom: 10, marginTop: 20, width: 300}}>
      <View>
        <Image
          source={{uri: typeof image === 'string' ? image : ''}}
          style={{width: 280, height: 280, borderRadius: 20}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            {name}
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
            ₹{price}
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 12, fontWeight: '300'}}>In {cakeType}</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            Best Price {bestPrice} with coupon
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewArrival;

const styles = StyleSheet.create({});
