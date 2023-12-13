import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../Constants/Colors';

const ProfileContentSection = () => {
  const [img, setImg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{width: '100%', marginBottom: 10}}>
      <View style={{gap: 8, paddingHorizontal: 10}}>
        <Text style={{color: '#323637', fontSize: 16, fontWeight: 'bold'}}>
          Account Name
        </Text>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 10,
            paddingHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <TextInput placeholder="Enter Email" placeholderTextColor={'gray'} />
        </View>
      </View>

      <View style={{gap: 8, paddingHorizontal: 10, marginTop: 10}}>
        <Text style={{color: '#323637', fontSize: 16, fontWeight: 'bold'}}>
          Resitendal Address
        </Text>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 10,
            paddingHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <TextInput
            placeholder="Enter Address"
            placeholderTextColor={'gray'}
          />
        </View>
      </View>

      <View style={{gap: 8, paddingHorizontal: 10, marginTop: 10}}>
        <Text style={{color: '#323637', fontSize: 16, fontWeight: 'bold'}}>
          Email
        </Text>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 10,
            paddingHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor={'gray'}
            style={{width: '90%'}}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: color.primaryColor,
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{gap: 8, paddingHorizontal: 10, marginTop: 10}}>
        <Text style={{color: '#323637', fontSize: 16, fontWeight: 'bold'}}>
          Phone Number
        </Text>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 10,
            paddingHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor={'gray'}
            style={{width: '85%'}}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: color.primaryColor,
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{gap: 8, paddingHorizontal: 10, marginTop: 10}}>
        <Text style={{color: '#323637', fontSize: 16, fontWeight: 'bold'}}>
          Date Of Birth
        </Text>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 10,
            paddingHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <TextInput placeholder="Enter DOB" placeholderTextColor={'gray'} />
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: color.primaryColor,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileContentSection;

const styles = StyleSheet.create({});
