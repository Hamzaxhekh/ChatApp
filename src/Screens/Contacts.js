import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBar from '../Components/HeaderBar';
import Xmls from '../Utills/Xmls';
import MainChatBox from '../Components/MainChatBox';
import {userData} from '../Utills/ConstantData';

export default function Contacts() {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={'#000000'} />
      <HeaderBar heading={'Contacts'} iconPath={Xmls.bigContacts} />
      <MainChatBox dataitem={userData} headingtext={'Contacts'} Status={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#000000',
    flex: 1,
  },
});
