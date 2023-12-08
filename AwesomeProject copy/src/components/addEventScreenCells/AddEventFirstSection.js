import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddEventFirstList from './AddEventFirstList';

const AddEventFirstSection = () => {
  const firstList = [
    {
      name: 'Father',
    },
    {
      name: 'Mother',
    },
    {
      name: 'Son',
    },
    {
      name: 'Daughter',
    },
    {
      name: 'Grand Father',
    },
    {
      name: 'Grand Mother',
    },
    {
      name: 'Sibling 1',
    },
    {
      name: 'Sibling 2',
    },
    {
      name: 'Friends & Family',
    },
  ];

  const secondList = [
    {
      name: 'Parents',
    },
    {
      name: 'Mother',
    },
    {
      name: 'Son',
    },
    {
      name: 'Daughter',
    },
    {
      name: 'Grand Father',
    },
  ];

  return (
    <View style={{width: '100%', gap: 5}}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Birthday
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <FlatList
          data={firstList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <AddEventFirstList name={item.name} />}
          numColumns={3}
          style={{gap: 30}}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Anniversary
        </Text>
        <FlatList
          data={secondList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <AddEventFirstList name={item.name} />}
          numColumns={3}
          style={{gap: 30}}
        />
      </View>
    </View>
  );
};

export default AddEventFirstSection;

const styles = StyleSheet.create({});
