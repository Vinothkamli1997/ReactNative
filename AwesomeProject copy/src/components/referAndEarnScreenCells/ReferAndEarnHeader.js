import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color} from '../../Constants/Colors';

const ReferAndEarnHeader = () => {
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
            EC66810
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
                backgroundColor: 'gray',
                borderRadius: 10,
              }}>
              EC66810
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
    </ScrollView>
  );
};

export default ReferAndEarnHeader;

const styles = StyleSheet.create({});
