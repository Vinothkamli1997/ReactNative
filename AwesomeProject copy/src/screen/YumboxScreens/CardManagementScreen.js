import {
  FlatList,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import CardHeaderSection from '../../components/cardManagementScreenCells/CardHeaderSection';
import CardSecondSection from '../../components/cardManagementScreenCells/CardSecondSection';
import BankTypeSection from '../../components/cardManagementScreenCells/BankTypeSection';
import {color} from '../../Constants/Colors';

const CardManagementScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91 7449269449');

  const bankTypes = [
    {
      name: 'Gpay',
    },
    {
      name: 'Bhim',
    },
    {
      name: 'Paytm',
    },
    {
      name: 'Banking',
    },
  ];

  const openDialer = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection title={'Bill Details'} />
      <ScrollView>
        <CardHeaderSection />
        <CardSecondSection />
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
            margin: 10,
          }}>
          Choose your bank
        </Text>
        <View>
          <FlatList
            data={bankTypes}
            horizontal={true}
            renderItem={({item}) => <BankTypeSection bankType={item.name} />}
            style={{alignSelf: 'center'}}
          />
        </View>
        <View style={{alignSelf: 'center', marginTop: 10, gap: 8}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Need any help?
          </Text>

          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
              Call at
            </Text>
            <TouchableOpacity onPress={() => openDialer()}>
              <Text
                style={{
                  color: color.primaryColor,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {phoneNumber}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardManagementScreen;

const styles = StyleSheet.create({});
