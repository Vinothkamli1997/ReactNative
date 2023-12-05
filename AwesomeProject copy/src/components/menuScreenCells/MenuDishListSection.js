import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';

const MenuDishListSection = ({
  dishname,
  dishTypeName,
  realDishPrice,
  discountPrice,
  dishPercentage,
  bestPrice,
  tagName,
  cakeType,
  customize,
  dishType,
  dishImage,
}) => {
  const [tagTextColor, settagTextColor] = useState('');
  const [cakeTypeTextColor, setcakeTypeTextColor] = useState('');
  const [cakeTypeImage, setCakeTypeImage] = useState('');
  const [vegImage, setvegImage] = useState('');
  const [customise, setcustomise] = useState('');

  useEffect(() => {
    if (tagName === 'Basic') {
      settagTextColor(color.basicColor);
    } else if (tagName === 'Premium') {
      settagTextColor(color.premiumColor);
    } else {
      settagTextColor(color.primaryColor);
    }

    if (cakeType === 'Instantly Baked') {
      setcakeTypeTextColor(color.instanlyCOlor);
      setCakeTypeImage(require('../../assets/images/instantly.png'));
    } else if (cakeType.includes('Freshly')) {
      setcakeTypeTextColor(color.freshlyColor);
      setCakeTypeImage(require('../../assets/images/freshlybaked.png'));
    } else {
      setcakeTypeTextColor(color.speciallyColor);
      setCakeTypeImage(require('../../assets/images/speciallybaked.png'));
    }

    console.log('Veg', dishType);
    if (dishType === 'veg') {
      setvegImage(require('../../assets/images/vegImage.png'));
    } else {
      setvegImage(require('../../assets/images/speciallybaked.png'));
    }

    if (customize === 'Yes') {
      setcustomise('Customized');
    } else {
      setcustomise('');
    }
  }, []);

  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        borderRadius: 15,
        paddingVertical: 8,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Image
              source={{uri: dishImage}}
              style={{
                width: 110,
                height: 110,
                marginTop: 8,
                marginLeft: -10,
                borderRadius: 10,
              }}
            />
            <TouchableOpacity
              style={{
                width: 100,
                height: 35,
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 10,
                marginTop: 10,
                marginLeft: -10,
                backgroundColor: 'pink',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexGrow: 1,
                  width: '100%',
                  alignItems: 'flex-end',
                  right: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: 'red'}}>+</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'red',
                  }}>
                  Add
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{paddingHorizontal: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 12, color: 'black'}}>
                {customise}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexGrow: 1,
              paddingHorizontal: 8,
            }}>
            <View style={{gap: 10, justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 0,
                  alignItems: 'center',
                }}>
                <Image source={vegImage} style={{width: 25, height: 25}} />

                <AntDesign name={'star'} size={15} />
              </View>
              <View style={{gap: 8}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>
                  {dishname}
                </Text>
                <Text style={{fontSize: 10, color: 'gray', fontSize: 12}}>
                  In {dishTypeName}
                </Text>
              </View>

              <View style={{flexDirection: 'row', gap: 10}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
                  ₹{discountPrice}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'gray',
                    textDecorationLine: 'line-through',
                    color: 'gray',
                  }}>
                  ₹{realDishPrice}
                </Text>
                <Text>{dishPercentage}%</Text>
                <Text>(2 pound)</Text>
              </View>

              <View style={{flexDirection: 'row', gap: 5}}>
                <Text
                  style={{color: 'green', fontSize: 14, fontWeight: 'bold'}}>
                  Best Price ₹{bestPrice}
                </Text>
                <Text style={{color: 'gray', fontSize: 12, fontWeight: 'bold'}}>
                  With coupon
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Image source={cakeTypeImage} style={{width: 30, height: 30}} />
                <Text style={{color: cakeTypeTextColor}}>{cakeType}</Text>
              </View>
            </View>

            <View
              style={{
                marginRight: -15,
                gap: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 60,
                  backgroundColor: tagTextColor,
                  padding: 5,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {tagName}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  right: -10,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <AntDesign name={'heart'} size={20} color={'red'} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  right: -10,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <AntDesign name={'sharealt'} size={20} color={'black'} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  right: -10,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <AntDesign name={'infocirlce'} size={20} color={'red'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuDishListSection;

const styles = StyleSheet.create({});
