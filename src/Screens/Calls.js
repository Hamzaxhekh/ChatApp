import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBar from '../Components/HeaderBar';
import Xmls from '../Utills/Xmls';
import MainChatBox from '../Components/MainChatBox';
import { userData } from '../Utills/ConstantData';

export default function Calls() {
  return (
    <View style={styles.screen}>
       <StatusBar backgroundColor={'#000000'} />
      <HeaderBar heading={'Calls'} iconPath={Xmls.bigCallIcon} />
      
      <MainChatBox dataitem={userData} headingtext={'Recent'} callIcons={true} calltime={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
