import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FlavourDishList = ({title}) => {
  return (
    <View style={styles.bg}>
      <View>
        <Image
          source={require('../../assets/images/Buddha.jpeg')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginTop: -10,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text></Text>
          <View
            style={{
              backgroundColor: 'red',
              padding: 3,
              borderRadius: 5,
              left: 6,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
              }}>
              Premium
            </Text>
          </View>
        </View>

        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 35,
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 10,
                marginTop: 5,
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

            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 0,
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 5,
                  gap: 2,
                }}>
                <Image
                  source={require('../../assets/images/vegImage.png')}
                  style={{width: 25, height: 25}}
                />

                <AntDesign name={'star'} size={15} />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 14}}>Balck Forest</Text>
                <Text style={{fontSize: 12}}>Balck Forest</Text>

                <View style={{flexDirection: 'row', gap: 5}}>
                  <Text style={{fontSize: 14}}>900</Text>
                  <Text style={{fontSize: 14}}>900</Text>
                  <Text style={{fontSize: 14}}>900</Text>
                  <Text style={{fontSize: 14}}>900</Text>
                </View>

                <View style={{flexDirection: 'row', gap: 5}}>
                  <Text style={{fontSize: 14}}>Best Price</Text>
                  <Text style={{fontSize: 14}}>with coupon</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 0,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 5,
                    gap: 2,
                    bottom: 5,
                  }}>
                  <Image
                    source={require('../../assets/images/vegImage.png')}
                    style={{width: 25, height: 25}}
                  />

                  <AntDesign name={'star'} size={15} />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              gap: 5,
              position: 'absolute',
              right: 0,
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                width: 33,
                height: 33,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                right: -6,

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}>
              <AntDesign name={'heart'} size={18} color={'red'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 33,
                height: 33,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                right: -6,

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}>
              <AntDesign name={'sharealt'} size={18} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 33,
                height: 33,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                right: -6,

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}>
              <AntDesign name={'infocirlce'} size={18} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlavourDishList;

const styles = StyleSheet.create({
  bg: {
    minWidth: '45%',
    maxWidth: 230,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
