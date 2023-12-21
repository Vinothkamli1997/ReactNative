import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartScreenHeaderSection = () => {
  const [takeAway, setTakeAway] = useState(true);

  return (
    <View>
      {takeAway ? (
        <TouchableOpacity
          style={{
            width: '90%',
            padding: 2,
            backgroundColor: 'lightgray',
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}>
            <MaterialIcons
              name={'delivery-dining'}
              size={25}
              color={color.primaryColor}
            />
            <Text style={{color: color.primaryColor}}>Delivery</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: '90%',
            padding: 2,
            backgroundColor: 'lightgray',
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: '50%',
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}>
            <MaterialIcons
              name={'delivery-dining'}
              size={25}
              color={color.primaryColor}
            />
            <Text style={{color: color.primaryColor}}>Delivery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: '48%',
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}>
            <MaterialIcons
              name={'shopping-basket'}
              size={25}
              color={color.primaryColor}
            />
            <Text style={{color: color.primaryColor}}>TakeAway</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreenHeaderSection;

const styles = StyleSheet.create({});
