import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import AddEventFirstSection from '../../components/addEventScreenCells/AddEventFirstSection';

const AddEventScreen = () => {
  return (
    <View style={styles.container}>
      <TitleSection title={'Add Event'} />
      <Text
        style={{margin: 10, fontSize: 14, fontWeight: 'bold', color: 'red'}}>
        Earn 100 coins for every event added
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AddEventFirstSection />
      </ScrollView>
    </View>
  );
};

export default AddEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
