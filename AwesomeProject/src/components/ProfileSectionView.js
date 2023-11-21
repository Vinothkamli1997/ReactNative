import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
import React from 'react';

const ProfileSectionView = ({name, iconName, iconColor}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 80,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#E6EDFF',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
          }}>
          <AntDesign name={iconName} size={20} color={iconColor} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            width: '85%',
          }}>
          <Text style={{color: 'black'}}>{name}</Text>
          <FontAwesome6 name="arrow-right-long" size={20} color={iconColor} />
        </View>
      </View>

      <View style={{paddingHorizontal: 8}}>
        <Divider />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionView;

const styles = StyleSheet.create({});
