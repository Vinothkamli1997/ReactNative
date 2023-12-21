import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import SampleProjectListImageSection from './SampleProjectListImageSection';

const SampleProjectListScreen = () => {
  const imageList = [
    {
      name: 'Civil 1',
      images: require('../../assets/images/Cons1.jpg'),
    },
    {
      name: 'Civil 2',
      images: require('../../assets/images/Cons2.jpg'),
    },
    {
      name: 'Civil 3',
      images: require('../../assets/images/Cons3.jpg'),
    },
    {
      name: 'Civil 4',
      images: require('../../assets/images/Cons4.jpg'),
    },
    {
      name: 'Civil 5',
      images: require('../../assets/images/Cons5.jpg'),
    },
    {
      name: 'Civil 6',
      images: require('../../assets/images/Cons10.jpg'),
    },
    {
      name: 'Civil 7',
      images: require('../../assets/images/Cons7.jpg'),
    },
    {
      name: 'Civil 8',
      images: require('../../assets/images/Cons8.jpg'),
    },
    {
      name: 'Civil 8',
      images: require('../../assets/images/Cons9.jpg'),
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection title={'Project List'} />
      <View style={{alignSelf: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={imageList}
          numColumns={2}
          renderItem={({item}) => (
            <SampleProjectListImageSection
              nameee={item.name}
              imagesss={item.images}
            />
          )}
          style={{marginBottom: 55}}
        />
      </View>
    </View>
  );
};

export default SampleProjectListScreen;

const styles = StyleSheet.create({});
