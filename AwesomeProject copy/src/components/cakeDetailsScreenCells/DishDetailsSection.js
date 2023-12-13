import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const DishDetailsSection = ({
  dishName,
  realPrice,
  discountPrice,
  disPercentage,
  poundPrice,
  dishType,
  poundName,
  bestPrice,
  dishID,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%'}}>
      <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/vegImage.png')}
          style={{width: 30, height: 30}}
        />
        <AntDesign name={'star'} size={16} color={'red'} />
        <AntDesign name={'star'} size={16} color={'red'} />
        <AntDesign name={'star'} size={16} color={'red'} />
        <AntDesign name={'star'} size={16} color={'red'} />
      </View>
      <View style={{marginLeft: 8, gap: 5}}>
        <Text style={{fontSize: 18, color: 'black'}}>{dishName}</Text>
        <Text style={{color: 'gray', fontWeight: '300'}}>{dishType}</Text>

        <View style={{flexDirection: 'row', gap: 8}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            ₹{discountPrice}
          </Text>
          <Text
            style={{
              color: 'gray',
              textDecorationColor: 'red',
              textDecorationLine: 'line-through',
            }}>
            ₹{realPrice}
          </Text>
          <Text>{disPercentage}%</Text>
          <Text>
            ({poundPrice}
            {poundName})
          </Text>

          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              position: 'absolute',
              right: 10,
              backgroundColor: 'red',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() =>
              navigation.navigate('CakeAddOnScreen', {dishID: dishID})
            }>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
              Order now
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'green', fontWeight: 'bold'}}>
          Best Price ₹{bestPrice}
        </Text>
      </View>
    </View>
  );
};

export default DishDetailsSection;

const styles = StyleSheet.create({});
