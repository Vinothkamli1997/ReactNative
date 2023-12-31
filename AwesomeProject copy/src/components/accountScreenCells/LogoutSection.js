import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from '../../Constants/Colors';

const LogoutSection = () => {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleLogoutModal = () => {
    // Your logout logic, e.g., clearing AsyncStorage

    // Close the modal
    setLogoutModalVisible(!isLogoutModalVisible);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('someKey');

    setLogoutModalVisible(!isLogoutModalVisible);

    // Navigate to the login screen
    navigation.replace('SampleLogin');
  };

  return (
    <View
      style={{
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
      <Modal
        visible={isLogoutModalVisible}
        animationType="slide"
        transparent
        onRequestClose={toggleLogoutModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logoutButton}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleLogoutModal}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={toggleLogoutModal}
        style={{
          padding: 10,
          marginHorizontal: 10,
          backgroundColor: color.sapmleprimaryColor,
          borderRadius: 10,
          width: 100,
          bottom: 10,
          marginTop: 10,
          alignItems: 'center',

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 3,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutSection;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logoutButton: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: color.sapmleprimaryColor,
    borderRadius: 10,
  },
  cancelButton: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});
