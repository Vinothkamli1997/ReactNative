import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SkipButtonSection from '../../components/onboardingScreenComponents/SkipButtonSection';
import {ScrollView} from 'react-native-gesture-handler';
import ImageScrollSection from '../../components/onboardingScreenComponents/ImageScrollSection';

const OnBoardingScreen = () => {
  return (
    <View style={styles.container}>
      <SkipButtonSection />
      <View style={{flex: 1, alignSelf: 'center'}}>
        <ImageScrollSection />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
