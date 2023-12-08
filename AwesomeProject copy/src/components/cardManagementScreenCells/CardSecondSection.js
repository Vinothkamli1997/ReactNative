import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CardSecondSection = () => {
  return (
    <View style={{width: '100%'}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          marginTop: 10,
        }}>
        Payment Method
      </Text>

      <View
        style={{
          width: '95%',
          backgroundColor: 'white',
          height: 200,
          alignSelf: 'center',
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <View style={{width: '50%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginHorizontal: 10,
              color: 'black',
            }}>
            Scan this QR Code or take Snapshot by clicking below. Use any app
            below to pay us by selecting QR code from Gallery. Alternatively pay
            us at vinothakmli@okhdfcbank
          </Text>
        </View>
        <View style={{padding: 10, gap: 8}}>
          <Image
            source={require('../../assets/images/Buddha.jpeg')}
            style={{width: 150, height: 150}}
          />
          <TouchableOpacity>
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', color: 'red'}}>
              Tap Screenshot
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardSecondSection;

const styles = StyleSheet.create({});
