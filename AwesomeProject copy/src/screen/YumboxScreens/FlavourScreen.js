import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import FlavourDishList from '../../components/flavourDishScreen/FlavourDishList';
import {Text} from 'react-native-paper';

const FlavourScreen = () => {
  const baList = [
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
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'center',
          width: '100%',
        }}>
        <TitleSection title={'Category Dishes'} />
        <ScrollView>
          <View
            style={{
              backgroundColor: 'white',
              alignSelf: 'center',
              marginBottom: 80,
            }}>
            <FlatList
              data={baList}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <FlavourDishList title={item.name} />
              )}
            />
          </View>

          <View>
            <Text style={{color: 'darkblue'}}>ertgegethgrthg</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FlavourScreen;

const styles = StyleSheet.create({});
