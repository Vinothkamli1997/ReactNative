import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {color} from '../../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutUsHeaderSection = () => {
  const number = '+91 7449269449';

  const openDailPad = () => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          padding: 10,
        }}>
        <Image
          source={require('../../assets/images/Buddha.jpeg')}
          style={{width: 100, height: 100}}
        />
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Elite Cakes
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'pink',
          width: '93%',
          height: 80,
          alignSelf: 'center',
          borderRadius: 10,
          padding: 10,
        }}>
        <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
          Address
        </Text>

        <View style={{flexDirection: 'row', gap: 5}}>
          <FontAwesome5
            name={'map-marker-alt'}
            size={22}
            color={color.primaryColor}
          />
          <Text style={{color: 'black'}}>Patiala</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: 'red',
          width: '93%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginTop: -5,
          flexDirection: 'row',
          gap: 10,
        }}
        onPress={() => {
          openDailPad();
        }}>
        <Ionicons name={'call'} size={22} color={'white'} />
        <Text style={{color: 'white'}}>Call Restaurent</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutUsHeaderSection;

const styles = StyleSheet.create({});
