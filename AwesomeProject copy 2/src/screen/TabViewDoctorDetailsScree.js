import {View, FlatList} from 'react-native';
import React from 'react';
import {topDoctorName} from '../data/TopDoctorList';
import TopDoctors from '../components/topDoctorSection/TopDoctors';

const TabViewDoctorDetailsScree = () => {
  return (
    <View>
      <FlatList
        data={topDoctorName}
        renderItem={({item}) => (
          <TopDoctors name={item.name} ratingCount={item.ratingCount} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TabViewDoctorDetailsScree;
