import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../Constants/Colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function HosList({title, area}) {
  console.log('Hospital');

  return (
    <TouchableOpacity style={styles.specalistView}>
      <Image
        source={require('../assets/images/CategoryImage.png')}
        style={styles.specImage}
        resizeMode="contain"
      />
      <Text style={styles.specBestHostitalText}>{title}</Text>
      <View style={styles.locView}>
        <FontAwesome6
          name="location-dot"
          size={20}
          color="#2D2E8B"
          style={styles.locImage}
        />
        <Text style={styles.locAreaText}>{area}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  specalistView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    height: 220,
    width: 160,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  specImage: {
    width: 100,
    height: 100,
  },
  specBestHostitalText: {
    color: color.titleColor,
    fontWeight: '600',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Urbanist-ExtraBold.ttf',
  },
  locationText: {
    color: '#56648D',
    fontWeight: '400',
  },
  areaText: {
    fontWeight: '800',
    color: '#2D2E8B',
  },
  locView: {
    flexDirection: 'row',
  },
  locAreaText: {
    paddingHorizontal: 5,
  },
});
