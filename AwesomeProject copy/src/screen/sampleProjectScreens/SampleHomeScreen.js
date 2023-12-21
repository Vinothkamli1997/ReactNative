import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../Constants/Colors';
import HeaderSection from '../../components/homeScreen/HeaderSection';
import SampleProjectList from './SampleProjectList';

const SampleHomeScreen = () => {
  const projList = [
    {
      projectName: 'Project 1',
      duration: '2 Hrs',
      image: require('../../assets/images/Cons1.jpg'),
    },
    {
      projectName: 'Project 2',
      duration: '6 Days',
      image: require('../../assets/images/Cons2.jpg'),
    },
    {
      projectName: 'Project 3',
      duration: '5 Hrs',
      image: require('../../assets/images/Cons3.jpg'),
    },
    {
      projectName: 'Project 4',
      duration: '3 Hrs',
      image: require('../../assets/images/Cons4.jpg'),
    },
  ];

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <HeaderSection />
        <View style={{alignSelf: 'center'}}>
          <FlatList
            data={projList}
            numColumns={2}
            renderItem={({item}) => (
              <SampleProjectList
                name={item.projectName}
                duration={item.duration}
                image={item.image}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SampleHomeScreen;

const styles = StyleSheet.create({});
