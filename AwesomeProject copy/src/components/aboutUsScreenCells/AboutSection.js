import {Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {version} from '../../../package.json';

const AboutSection = () => {
  const appVersion = version;

  const shareContent = {
    message:
      'Check out this app: https://play.google.com/store/apps/details?id=com.tt.yumbox.elitecake',
  };

  const shareAction = () => {
    const result = Share.share(shareContent);
  };

  return (
    <View style={{margin: 10, gap: 10}}>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <AntDesign name={'appstore-o'} size={24} color={'gray'} />
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          AppVersion {appVersion}
        </Text>
      </View>

      <TouchableOpacity
        style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}
        onPress={() => {
          shareAction();
        }}>
        <AntDesign name={'sharealt'} size={24} color={'gray'} />
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          Share this app
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <AntDesign name={'staro'} size={24} color={'gray'} />
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          Rate us
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutSection;

const styles = StyleSheet.create({});
