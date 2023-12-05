import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UploadImageSection = () => {
  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  const getImageProfile = async () => {
    await AsyncStorage.getItem('ProfileImage')
      .then(uri => {
        setImg(uri);
      })
      .catch(error => {
        console.error('Error reading image URI from AsyncStorage:', error);
      });

    AsyncStorage.getItem('ProfileName')
      .then(givenName => {
        setName(givenName);
      })
      .catch(error => {
        console.error('Error reading Given Name from AsyncStorage:', error);
      });

    AsyncStorage.getItem('ProfileLastName')
      .then(lastName => {
        setLastName(lastName);
        console.log('Last Name:', lastName);
      })
      .catch(error => {
        console.error('Error reading Given Name from AsyncStorage:', error);
      });

    AsyncStorage.getItem('ProfileEmail')
      .then(email => {
        setEmail(email);
      })
      .catch(error => {
        console.error('Error reading Given Name from AsyncStorage:', error);
      });
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openGallery = () => {
    setModalVisible(false);

    launchImageLibrary(
      {
        mediaType: 'photo',
        // includeBase64: true,
        cameraType: 'back',
        quality: 1,
      },
      res => {
        if (res.assets && res.assets.length > 0) {
          const selectedImageUri = res.assets[0].uri;
          setImg(selectedImageUri);
        }
      },
    );
  };

  const openCamera = () => {
    setModalVisible(false);

    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        quality: 1,
      },
      res => {
        if (res.assets && res.assets.length > 0) {
          const selectedImageUri = res.assets[0].uri;
          setImg(selectedImageUri);
        }
      },
    );
  };

  useEffect(() => {
    // Retrieve the image URI from AsyncStorage
    getImageProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 140,
          height: 140,
          borderRadius: 140,
          backgroundColor: '#8888',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          top: 5,
        }}>
        <View style={styles.imageSection}>
          <Image source={{uri: img}} style={styles.image} />
        </View>
      </View>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 30,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          top: -30,
          right: -40,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            backgroundColor: '#8888',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AntDesign name="edit" size={22} color="black" />
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                alignSelf: 'center',
                height: '100%',
                width: '100%',
                bottom: 20,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: 200,

                  shadowColor: 'black',
                  shadowOffset: 10,

                  elevation: 10,
                }}>
                <TouchableOpacity onPress={openGallery}>
                  <Text>Open Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openCamera}>
                  <Text>Open Camera</Text>
                </TouchableOpacity>

                <Text onPress={() => setModalVisible(false)}>Cancel</Text>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default UploadImageSection;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    backgroundColor: 'white',
  },
  imageSection: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 134,
    height: 134,
    borderRadius: 75,
  },
});
