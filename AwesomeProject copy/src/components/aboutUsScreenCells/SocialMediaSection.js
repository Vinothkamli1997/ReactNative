import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';

const SocialMediaSection = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 120,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        style={{width: '40%', alignSelf: 'center', alignItems: 'center'}}>
        <AntDesign name={'facebook-square'} size={70} color={'blue'} />
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 0.7,
            width: '100%',
            margin: 10,
          }}
        />
        <Text style={{fontSize: 12, color: 'black'}}>Like Us on Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '40%',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name={'instagram'} size={70} color={color.primaryColor} />

        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 0.7,
            width: '100%',
            margin: 10,
          }}
        />
        <Text style={{fontSize: 12, color: 'black'}}>
          Follow Us on Instagram
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialMediaSection;

const styles = StyleSheet.create({});
