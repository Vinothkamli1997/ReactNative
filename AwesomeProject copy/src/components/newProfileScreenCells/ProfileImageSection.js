import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {color} from '../../Constants/Colors';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileImageSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const galleryAcces = () => {
    setModalVisible(false);
    let options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Selected Image:', response.assets[0].uri);
        setImageUrl(response.assets[0].uri);
      }
    });
  };

  const cameraAccess = () => {
    setModalVisible(false);

    launchCamera({}, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        console.log('Captured Image:', response.assets[0].uri);
        setImageUrl(response.assets[0].uri);
      }
    });

    AsyncStorage.setItem('ProfileImageNew', imageUrl);
  };

  return (
    <View
      style={{
        width: 125,
        height: 125,
        alignSelf: 'center',
      }}>
      <View
        style={{
          width: 105,
          height: 105,
          borderRadius: 120,
          backgroundColor: '#8888',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          position: 'relative',
        }}>
        <TouchableOpacity
          style={styles.imageSection}
          onPress={() => openModal()}>
          {imageUrl === '' ? (
            <Image
              source={require('../../assets/images/Buddha.jpeg')}
              style={styles.image}
            />
          ) : (
            <Image source={{uri: imageUrl}} style={styles.image} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 20,
          position: 'absolute',
          bottom: 5,
          right: 8,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        onPress={() => openModal()}>
        <Entypo name={'camera'} size={22} color={color.primaryColor} />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '60%',
              gap: 20,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <TouchableOpacity onPress={() => galleryAcces()}>
              <Text style={styles.textStyle}>Open Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => cameraAccess()}>
              <Text style={styles.textStyle}>Open Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileImageSection;

const styles = StyleSheet.create({
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
