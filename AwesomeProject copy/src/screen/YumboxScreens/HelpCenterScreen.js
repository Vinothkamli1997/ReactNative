import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import ContentSection from '../../components/helpCenterScreenCells/ContentSection';

const HelpCenterScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection title={'Help Center'} />
      <ContentSection />
    </View>
  );
};

export default HelpCenterScreen;

const styles = StyleSheet.create({});
