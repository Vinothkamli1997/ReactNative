import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';

const TrackOrderStatusSection = ({index, name, list}) => {
  const [width, setWidth] = useState(10);
  const [lastwidth, setlastWidth] = useState(0);

  const lastIndex = list.length - 1;

  useEffect(() => {
    if (index === lastIndex) {
      setWidth(0);
      setlastWidth(0);
    } else {
      setWidth(10);
      setlastWidth(50);
    }
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 10,
        marginLeft: width,
        borderWidth: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 20,
            }}>
            <AntDesign name={'shoppingcart'} size={23} color={'black'} />
          </View>
          <Text style={{fontSize: 12}}>{name}</Text>
        </View>

        <View
          style={{
            width: lastwidth,
            height: 1,
            backgroundColor: color.primaryColor,
          }}></View>
      </View>
    </View>
  );
};

export default TrackOrderStatusSection;

const styles = StyleSheet.create({});
