import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const NextButton = ({title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  nextButton: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    marginTop: 10,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
