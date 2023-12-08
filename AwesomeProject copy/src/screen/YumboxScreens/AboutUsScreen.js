import {StyleSheet, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import AboutUsHeaderSection from '../../components/aboutUsScreenCells/AboutUsHeaderSection';
import SocialMediaSection from '../../components/aboutUsScreenCells/SocialMediaSection';
import AboutSection from '../../components/aboutUsScreenCells/AboutSection';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <TitleSection title={'About Us'} />
      <AboutUsHeaderSection />
      <SocialMediaSection />
      <AboutSection />
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
