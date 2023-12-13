import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../../Constants/Colors';
import axios from 'axios';
import {referral} from '../../api/EndPoints';
import {Loader} from '../../components/loader/Loader';

const ReferAndEarnHeader = () => {
  const [loading, setloading] = useState(false);
  const [referralID, setreferralID] = useState('');

  const shareContent = {
    message:
      'Check out this awesome app: https://play.google.com/store/apps/details?id=com.tt.yumbox.elitecake',
  };

  const onShare = async () => {
    // try {
    const result = await Share.share(shareContent);

    //   if (result.action === Share.sharedAction) {
    //     if (result.activityType) {
    //       // Shared with activity type of result.activityType
    //     } else {
    //       // Shared
    //     }
    //   } else if (result.action === Share.dismissedAction) {
    //     // Dismissed
    //   }
    // } catch (error) {
    //   console.error('Error sharing:', error.message);
    // }
  };

  useEffect(() => {
    referralApi();
  }, []);

  const referralApi = async () => {
    setloading(true);
    try {
      const response = await axios.post(referral, {
        auth_token: 'ecda1e2f6dfd2420efc293ecb9405f62',
        merchant_id: '1',
        customer_id: '27',
      });

      const res = response.data;
      console.log('REferralApi', res);

      setreferralID(res.parameters.referal_code);
    } catch (error) {
      console.log('Api error', error);
    } finally {
      setloading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}>
        <Image
          source={require('../../assets/images/ReferralCode.jpg')}
          style={{width: 150, height: 150, marginTop: 20}}
          resizeMode="cover"
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            gap: 8,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
            Your Referral ID:
          </Text>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            {referralID}
          </Text>
        </View>

        <View style={{padding: 10}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Refer your friends to get 100 coins. Your friend will get 200 coins
            by adding your Referral ID under Special Welcome Bonus. You will
            also get 10 coins for every successful order placed by user under
            your ID
          </Text>
        </View>
        <View style={{gap: 20, alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/ReferralImage.jpg')}
            style={{width: 180, height: 180, marginTop: 15}}
          />

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
            }}>
            <Text
              style={{
                padding: 10,
                marginHorizontal: 10,
                backgroundColor: 'lightgray',
                borderRadius: 10,
                color: 'black',
              }}>
              {referralID}
            </Text>
            <TouchableOpacity onPress={onShare}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: color.primaryColor,
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 12,
                }}>
                Share Your ID
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {loading && <Loader loading={loading} />}
    </ScrollView>
  );
};

export default ReferAndEarnHeader;

const styles = StyleSheet.create({});
