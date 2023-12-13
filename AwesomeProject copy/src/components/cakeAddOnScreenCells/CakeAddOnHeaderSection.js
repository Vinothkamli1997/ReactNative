import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';
import {useNavigation} from '@react-navigation/native';

const CakeAddOnHeaderSection = ({
  dishImage,
  dishName,
  realPrice,
  disCountPrice,
  disPercentage,
  dishID,
}) => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const countMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plusMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '50%',
            paddingHorizontal: 10,
            gap: 3,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            {dishName}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/vegImage.png')}
              style={{width: 25, height: 25}}
            />

            <AntDesign name={'star'} size={16} color={'orange'} />
          </View>

          <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>
            Choose Size
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 10,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <Text>1 Pound</Text>
            <View style={{flexDirection: 'row', gap: 8}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
                ₹{realPrice}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  textDecorationLine: 'line-through',
                }}>
                ₹{disCountPrice}
              </Text>
              <Text style={{color: 'green'}}>{disPercentage}%</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'green', fontWeight: 'bold'}}>
                Best Price $99
              </Text>
              <AntDesign
                name={'down'}
                size={20}
                style={{margin: -10, right: -25}}
              />
            </View>
            <Text style={{color: 'gray', fontSize: 12, fontWeight: '500'}}>
              with coupon and coins
            </Text>
          </TouchableOpacity>

          <View style={{gap: 8}}>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>
              Choose Size
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{padding: 5, borderWidth: 1, borderRadius: 10}}
                onPress={() => countMinus()}>
                <AntDesign name={'minus'} size={18} color={'black'} />
              </TouchableOpacity>

              <Text style={{color: color.primaryColor, fontWeight: '600'}}>
                {quantity}
              </Text>
              <TouchableOpacity
                style={{padding: 5, borderWidth: 1, borderRadius: 10}}
                onPress={() => plusMinus()}>
                <AntDesign name={'plus'} size={18} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flexGrow: 1,
            alignItems: 'flex-end',
            padding: 5,
            gap: 5,
          }}>
          <TouchableOpacity
            style={{
              padding: 8,
              backgroundColor: 'white',
              borderRadius: 10,
              margin: 5,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <AntDesign name={'heart'} size={18} color={color.primaryColor} />
          </TouchableOpacity>

          <Image
            source={{uri: dishImage}}
            style={{width: '100%', height: 200, right: -10}}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 10,
          width: '90%',
          alignItems: 'center',
          backgroundColor: 'white',
          alignSelf: 'center',
          padding: 10,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        onPress={() =>
          navigation.navigate('CakeDetailsScreen', {dishID: dishID})
        }>
        <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>
          Click Here to see the details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CakeAddOnHeaderSection;

const styles = StyleSheet.create({});
