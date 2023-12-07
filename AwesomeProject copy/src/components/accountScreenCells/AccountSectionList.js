import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const AccountSectionList = ({name, image, index, path}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: '95%',
        backgroundColor: 'white',
        height: 55,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,

        elevation: 4,
        marginBottom: 8,
      }}
      onPress={() => {
        navigation.navigate(path);
      }}>
      <View
        style={{
          backgroundColor: 'lightgray',
          width: 30,
          height: 30,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          marginHorizontal: 10,
        }}>
        <AntDesign name={image} size={18} color={'red'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}>
        <Text>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          {index == 0 ? (
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'lightgray',
                borderRadius: 10,
                gap: 8,
              }}>
              <Text>5</Text>
              <AntDesign name={'star'} size={18} color={'red'} />
            </View>
          ) : (
            <></>
          )}
          <AntDesign name={'right'} size={22} color={'#000'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountSectionList;

const styles = StyleSheet.create({});
