import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import OtpField from '../../components/otpScreenComponents/OtpField';

const SampleOtpScreen = ({route}) => {
  const phnnumber = route?.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <TitleSection title={'OTP Screen'} />
        <OtpField mobileNumber={phnnumber} />
      </View>
    </SafeAreaView>
  );
};

export default SampleOtpScreen;

const styles = StyleSheet.create({});
