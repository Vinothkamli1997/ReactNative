import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TopDoctors = ({name, ratingCount}) => {
  const [iconName, setIconName] = useState('hearto');

  const heartAction = () => {
    setIconName('heart');
    if (iconName === 'hearto') {
      setIconName('heart');
    } else {
      setIconName('hearto');
    }
  };

  return (
    <View style={styles.bgView}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/Doctor.png')}
            style={styles.doctorImage}
          />
        </View>
        <View style={{width: '66%', alignSelf: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 5,
            }}>
            <Text>{name}</Text>

            <TouchableOpacity onPress={heartAction}>
              <AntDesign name={iconName} size={24} color="#2D2E8B" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 5,
              width: '100%',
              padding: 10,

              alignSelf: 'center',
            }}>
            <Divider bold />
          </View>

          <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
            <Text>Cardio Specialist | Hts Hospital</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 5,
              textAlign: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <AntDesign name="star" size={18} color="orange" />
            <Text style={{textAlign: 'center', paddingHorizontal: 4}}>
              {ratingCount}
            </Text>
            <Text>(4,874 reviews)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopDoctors;

const styles = StyleSheet.create({
  bgView: {
    width: '90%',
    backgroundColor: 'white',
    height: 150,
    bottom: 10,
    marginTop: 18,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  doctorImage: {
    width: 120,
    height: 120,
  },
});
