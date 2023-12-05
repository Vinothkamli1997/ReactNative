import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {} from 'react-native-paper';

const SaveButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.saveBtn}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  saveBtn: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2D2E8B',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
