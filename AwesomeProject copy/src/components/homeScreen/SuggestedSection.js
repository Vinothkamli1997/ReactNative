import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SuggestedSection = ({
  title,
  image,
  item,
  rating,
  cakeType,
  heading,
  disPrice,
  realPrice,
  disPercentage,
  pound,
  bestPrice,
}) => {
  let flexDirectionStyle;

  if (item % 2 === 1) {
    flexDirectionStyle = 'row-reverse';
  } else {
    flexDirectionStyle = 'row';
  }
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      const starColor = i <= rating ? 'orange' : 'gray';

      stars.push(
        <AntDesign key={i} name={'star'} size={18} color={starColor} />,
      );
    }

    return stars;
  };

  return (
    <TouchableOpacity
      style={{
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        height: 180,
        borderRadius: 20,
        marginTop: 15,
        bottom: 8,

        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
      }}>
      <View
        style={{
          flexDirection: flexDirectionStyle,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Image
          source={{uri: typeof image === 'string' ? image : ''}}
          style={{
            width: 130,
            height: 130,
            marginLeft: -15,
            marginRight: -10,
            borderRadius: 75,
          }}
        />

        <View
          style={{
            flexGrow: 1,
            height: '100%',
            justifyContent: 'center',
            gap: 5,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <FontAwesome6 name={'medal'} size={20} color={'red'} />
            <Text style={{fontSize: 14, color: 'red', fontWeight: 'bold'}}>
              {heading}
            </Text>
          </View>
          <View style={{marginHorizontal: 10, marginTop: 5, gap: 5}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
              {title}
            </Text>
            <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>
              In {cakeType}
            </Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8, marginHorizontal: 8}}>
            <Text style={{color: 'black'}}>₹{disPrice}</Text>
            <Text style={{color: 'black'}}>₹{realPrice}</Text>
            <Text style={{color: 'green', textAlign: 'center'}}>
              {disPercentage}%
            </Text>
            <Text style={{color: 'black'}}>({pound} pound)</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8, marginHorizontal: 8}}>
            <Text style={{color: 'green'}}>Best Price</Text>
            <Text style={{color: 'green', fontWeight: 'bold'}}>
              ₹{bestPrice}
            </Text>
            <Text style={{color: 'black'}}>with coupon</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/vegImage.png')}
              style={{width: 30, height: 30}}
            />

            {renderStars()}

            <TouchableOpacity
              style={{
                left: 10,
                backgroundColor: 'red',
                padding: 8,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 12, color: 'white'}}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SuggestedSection;

const styles = StyleSheet.create({});
