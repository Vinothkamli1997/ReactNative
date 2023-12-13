import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyFavDishList = () => {
  return (
    <TouchableOpacity style={styles.bg} activeOpacity={0.5}>
      <View style={{gap: 2}}>
        <View>
          <Image
            source={require('../../assets/images/Buddha.jpeg')}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: -25,
              borderRadius: 20,
            }}
          />
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

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 0,
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 5,
                gap: 3,
              }}>
              <Image
                source={require('../../assets/images/vegImage.png')}
                style={{width: 25, height: 25}}
              />

              <AntDesign name={'star'} size={15} />
            </View>
            <View style={{alignItems: 'center', gap: 1}}>
              <Text
                style={{
                  fontSize: 14,
                  minWidth: 100,
                  maxWidth: 130,
                  textAlign: 'center',
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Choco Friendship Special
              </Text>
              <Text style={{fontSize: 12, color: 'gray', fontWeight: '400'}}>
                Balck Forest
              </Text>

              <View style={{flexDirection: 'row', gap: 8}}>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                  $360
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    textDecorationLine: 'line-through',
                  }}>
                  $900
                </Text>
                <Text style={{fontSize: 14, color: 'green'}}>10%</Text>
              </View>

              <View
                style={{
                  alignItems: 'flex-end',
                  width: '100%',
                }}>
                <Text style={{color: 'black', fontWeight: '300', fontSize: 12}}>
                  See More
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyFavDishList;

const styles = StyleSheet.create({
  bg: {
    minWidth: '43%',
    maxWidth: 210,
    backgroundColor: 'white',
    margin: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingVertical: 15,
    borderRadius: 20,
  },
});
