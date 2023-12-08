import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import LogoutSection from '../../components/accountScreenCells/LogoutSection';
import AccountHeaderSection from '../../components/accountScreenCells/AccountHeaderSection';
import WalletSection from '../../components/accountScreenCells/WalletSection';
import AccountSectionList from '../../components/accountScreenCells/AccountSectionList';

const AccountScreen = () => {
  const walletList = [
    {
      name: 'Wallet',
      image: 'wallet',
      path: 'Wallet',
    },
    {
      name: 'Likes',
      image: 'heart',
      path: '',
    },
    {
      name: 'Profle',
      image: 'user',
      path: 'NewProfileScreen',
    },
    {
      name: 'Notification',
      image: 'bells',
      path: 'NotificationScreen',
    },
  ];

  const sectionList = [
    {
      name: 'YourRating',
      image: 'wallet',
      path: '',
    },
    {
      name: 'My Reffal ID',
      image: 'heart',
      path: 'MyReferralScreen',
    },
    {
      name: 'Add Event',
      image: 'user',
      path: 'AddEventScreen',
    },
    {
      name: 'Order History',
      image: 'bells',
      path: 'OrderHistoryScreen',
    },
    {
      name: 'Earn Cash',
      image: 'wallet',
      path: '',
    },
    {
      name: 'Address Book',
      image: 'heart',
      path: '',
    },
    {
      name: 'Card Management',
      image: 'user',
      path: 'CardManagementScreen',
    },
    {
      name: 'About Us',
      image: 'bells',
      path: 'AboutUsScreen',
    },
    {
      name: 'Help Center',
      image: 'bells',
      path: 'HelpCenterScreen',
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <AccountHeaderSection />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            data={walletList}
            horizontal={true}
            renderItem={({item}) => (
              <WalletSection
                name={item.name}
                image={item.image}
                path={item.path}
              />
            )}
          />
        </View>

        <View>
          <FlatList
            data={sectionList}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <AccountSectionList
                name={item.name}
                image={item.image}
                index={index}
                path={item.path}
              />
            )}
          />
        </View>
        <LogoutSection />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
