import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import md5 from 'md5';
import axios from 'axios';
import {saltKey, voucherDetailsApi} from '../../api/EndPoints';
import HTML from 'react-native-render-html';

const CakeDetailsOfferSection = ({vouchersName, vouchersCode, dishID}) => {
  const [offerVisible, setOfferVisible] = useState(false);
  const [voucherDetails, setVoucherDetails] = useState(null);

  console.log('DishID', dishID);

  const voucherApi = async () => {
    const hashedDishID = md5(saltKey + '27');
    console.log('SaltVou', hashedDishID);

    try {
      const response = await axios.post(voucherDetailsApi, {
        merchant_id: '1',
        auth_token: hashedDishID,
        outlet_id: '2',
        customer_id: '27',
        id: '291',
        dish_id: dishID,
      });

      const res = response.data;

      setVoucherDetails(res.parameters.voucher[0].description);
      console.log('voucherRes', res.parameters.voucher.description);
    } catch (error) {
      console.log('errorVou', error);
    }
  };

  useEffect(() => {
    voucherApi();
  }, []);

  return (
    <View
      style={{
        width: '93%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
        margin: 5,
      }}>
      <View style={{padding: 10, flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/coupon.png')}
          style={{width: 40, height: 40}}
        />
        <View style={{marginHorizontal: 5, flexGrow: 1}}>
          <View>
            <Text style={{color: 'black'}}>{vouchersName}</Text>
            <Text style={{color: 'gray'}}>use Code {vouchersCode}</Text>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', right: 5, color: 'red'}}
            onPress={() => {
              setOfferVisible(true);
            }}>
            <Text style={{color: 'red'}}>*T&C</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={offerVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              alignItems: 'center',
              alignSelf: 'center',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,

              elevation: 17,
            }}>
            <Text
              style={{
                color: 'black',
                marginTop: 2,
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Terms and conditions
            </Text>
            <TouchableOpacity
              onPress={() => setOfferVisible(false)}
              style={{position: 'absolute', right: 5, margin: 6}}>
              <AntDesign name={'closecircle'} size={20} color={'black'} />
            </TouchableOpacity>

            <View style={{marginHorizontal: 10}}>
              <HTML source={{html: voucherDetails}} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CakeDetailsOfferSection;

const styles = StyleSheet.create({});
