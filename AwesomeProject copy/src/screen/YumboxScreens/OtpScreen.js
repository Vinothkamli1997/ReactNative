import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import OtpField from '../../components/otpScreenComponents/OtpField';

const OtpScreen = ({route}) => {
  const phnnumber = route?.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TitleSection title={'OTP Screen'} />
        <OtpField mobileNumber={phnnumber} />
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
