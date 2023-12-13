import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NewArrival = ({
  dishID,
  name,
  image,
  price,
  cakeType,
  bestPrice,
  isHome,
  onPress,
  rating,
}) => {
  const navigation = useNavigation();

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 3; i++) {
      const starColor = i <= 3 ? 'orange' : 'gray';

      stars.push(
        <AntDesign key={i} name={'star'} size={18} color={starColor} />,
      );
    }

    return stars;
  };

  return (
    <TouchableOpacity
      style={{paddingHorizontal: 10, bottom: 10, marginTop: 20, width: 300}}
      onPress={() => {
        isHome
          ? navigation.navigate('CakeDetailsScreen', {dishID: dishID})
          : onPress();
      }}>
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
          <Text style={{fontSize: 12, fontWeight: 'bold', color: 'green'}}>
            Best Price ₹{bestPrice} with coupon
          </Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Image
            source={require('../../assets/images/vegImage.png')}
            style={{width: 25, height: 25}}
          />

          {renderStars()}

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              padding: 8,
              backgroundColor: 'red',
              borderRadius: 20,
            }}
            onPress={() => {
              isHome
                ? navigation.navigate('CakeAddOnScreen', {dishID: dishID})
                : onPress();
            }}>
            <Text style={{fontSize: 12, color: 'white'}}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewArrival;

const styles = StyleSheet.create({});
