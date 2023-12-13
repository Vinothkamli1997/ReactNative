import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import MyFavDishList from '../../components/myFavouriteScreenCells/MyFavDishList';

const MyFavouriteScreen = () => {
  const favList = [
    {
      name: 'weufhi',
    },
    {
      name: 'weufhi',
    },
    {
      name: 'weufhi',
    },
    {
      name: 'weufhi',
    },
    {
      name: 'weufhi',
    },
    {
      name: 'weufhi',
    },
    {
      name: 'weufhi',
    },
    {
      name: 'weufhi',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection title={'My Favourite'} />
      <View style={{alignSelf: 'center', marginBottom: 42}}>
        <FlatList
          data={favList}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <MyFavDishList />}
        />
      </View>
    </View>
  );
};

export default MyFavouriteScreen;

const styles = StyleSheet.create({});
