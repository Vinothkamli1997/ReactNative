import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import TimeSlotSection from './TimeSlotSection';

const DateTimeSection = () => {
  const timeSlots = [
    {
      name: '12pm-2pm',
    },
    {
      name: '2pm-5pm',
    },
    {
      name: '5pm-7pm',
    },
  ];

  return (
    <View style={{width: '93%', alignSelf: 'center', gap: 5}}>
      <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
        Available Delivery Slots
      </Text>
      <FlatList
        data={timeSlots}
        horizontal
        renderItem={({item}) => <TimeSlotSection time={item.name} />}
      />
    </View>
  );
};

export default DateTimeSection;

const styles = StyleSheet.create({});
