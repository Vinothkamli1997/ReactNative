import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ContentSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91 7449269449');

  const openDialer = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
      }}>
      <Image
        source={require('../../assets/images/HelpCenter.jpeg')}
        style={{width: 250, height: 250}}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Customer Support We are always there to help you out.Call Us at
        <TouchableOpacity
          onPress={() => {
            openDialer();
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'red',
            }}>
            {' '}
            +91 9115378000
          </Text>
        </TouchableOpacity>
        for any queries, issues, feedback and suggestions.
      </Text>
    </View>
  );
};

export default ContentSection;

const styles = StyleSheet.create({});
