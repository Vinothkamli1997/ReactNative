import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import ProfileImageSection from '../../components/newProfileScreenCells/ProfileImageSection';
import ProfileContentSection from '../../components/newProfileScreenCells/ProfileContentSection';

const NewProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TitleSection title={'Account Management'} />
      <ScrollView>
        <ProfileImageSection />
        <ProfileContentSection />
      </ScrollView>
    </View>
  );
};

export default NewProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
