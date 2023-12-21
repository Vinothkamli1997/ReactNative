import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const NameAndTextFieldSection = ({placeholder, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text>{title}</Text>
        <TextInput
          style={{
            width: '95%',
            height: 50,
            backgroundColor: '#EEF4FF',
            top: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            padding: 10,
          }}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default NameAndTextFieldSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameView: {
    width: '95%',
    paddingHorizontal: 5,
  },
});
