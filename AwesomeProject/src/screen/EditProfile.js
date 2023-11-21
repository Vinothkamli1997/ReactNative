import {StyleSheet, View} from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';
import UploadImageSection from '../components/UploadImageSection';
import NameAndTextFieldSection from '../components/NameAndTextFieldSection';
import {ScrollView} from 'react-native-gesture-handler';
import SaveButton from '../components/SaveButton';

const EditProfile = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <BackButton title={'EditProfile'} />

        <UploadImageSection />

        <NameAndTextFieldSection
          title={'Full Name'}
          placeholder={'Enter Full Name'}
        />

        <NameAndTextFieldSection title={'Email'} placeholder={'Enter Email'} />

        <NameAndTextFieldSection
          title={'Phone'}
          placeholder={'Enter Phone Number'}
        />

        <NameAndTextFieldSection
          title={'Gender'}
          placeholder={'Enter Gender'}
        />

        <NameAndTextFieldSection
          title={'Date of birth'}
          placeholder={'Enter DOB'}
        />

        <SaveButton />
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
