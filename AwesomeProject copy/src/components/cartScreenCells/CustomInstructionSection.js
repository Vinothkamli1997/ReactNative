import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const CustomInstructionSection = () => {
  const navigation = useNavigation();
  const [instruction, setInstruction] = useState('');
  return (
    <View style={{gap: 5, marginTop: 8}}>
      <View
        style={{
          width: '93%',
          padding: 1,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 2,
          marginBottom: 10,
        }}>
        <View style={{marginLeft: 10}}>
          <AntDesign name={'edit'} size={22} color={color.primaryColor} />
        </View>
        <TextInput
          value={instruction}
          onChangeText={setInstruction}
          placeholder="Mention Your special instruction Here"
          placeholderTextColor={'gray'}
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          width: '93%',
          padding: 1,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 2,
          marginBottom: 10,
        }}>
        <View style={{marginLeft: 10}}>
          <FontAwesome
            name={'birthday-cake'}
            size={22}
            color={color.primaryColor}
          />
        </View>

        <TextInput
          value={instruction}
          onChangeText={setInstruction}
          placeholder="Add Cake Cutting Time Here"
          placeholderTextColor={'gray'}
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          width: '93%',
          padding: 1,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 2,
          marginBottom: 10,
        }}>
        <View style={{marginLeft: 10}}>
          <AntDesign name={'filetext1'} size={22} color={color.primaryColor} />
        </View>

        <TextInput
          value={instruction}
          onChangeText={setInstruction}
          placeholder="Add Birthday Text Here"
          placeholderTextColor={'gray'}
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          width: '93%',
          padding: 10,
          backgroundColor: 'white',
          alignSelf: 'center',
          marginTop: 8,
          borderRadius: 10,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 2,
          bottom: 8,
        }}
        onPress={() => navigation.navigate('ApplyCouponScreen')}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <AntDesign name={'heart'} size={25} color={'red'} />
          <View style={{flexGrow: 1}}>
            <Text style={{fontSize: 14, color: 'black'}}>Apply Coupon</Text>
            <Text style={{fontSize: 12, color: 'gray'}}>
              3 Offers Available
            </Text>
          </View>
          <AntDesign name={'right'} size={24} color={color.primaryColor} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomInstructionSection;

const styles = StyleSheet.create({});
