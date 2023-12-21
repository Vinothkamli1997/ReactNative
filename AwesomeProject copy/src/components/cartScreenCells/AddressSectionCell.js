import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';

const AddressSectionCell = () => {
  return (
    <View
      style={{
        width: '93%',
        padding: 10,
        backgroundColor: '#eeeeee',
        alignSelf: 'center',
        marginTop: 18,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        bottom: 8,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        <AntDesign name={'heart'} size={25} color={'red'} />
        <View style={{flexGrow: 1}}>
          <Text>Delivery at</Text>
          <Text>Coim atorey</Text>
        </View>
        <Text style={{textAlign: 'center', justifyContent: 'center'}}>
          Change
        </Text>
      </View>
    </View>
  );
};

export default AddressSectionCell;

const styles = StyleSheet.create({});
