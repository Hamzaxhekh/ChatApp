import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgIcon from '../Assets/SVgs/svgicon';
import Xmls from '../Utills/Xmls';

export default function Profile() {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={'#000000'} />
      <View style={{marginTop: 20, marginLeft: 20}}>
        <SvgIcon xmlPath={Xmls.backButton} />
      </View>
      <View> </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
