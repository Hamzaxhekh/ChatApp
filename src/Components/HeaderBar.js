import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgIcon from '../Assets/SVgs/svgicon';
import Xmls from '../Utills/Xmls';

export default function HeaderBar({image = false, heading, iconPath}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <SvgIcon xmlPath={Xmls.Search} />
      </View>
      <Text style={styles.heading}>{heading}</Text>
      {image && (
        <Image
          source={require('../Assets/Images/Mypic.jpeg')}
          style={styles.profilepic}
        />
      )}

      {!image && (
        <View style={{marginRight: 10}}>
          <SvgIcon xmlPath={iconPath} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  searchIcon: {
    marginLeft: 20,
  },
  heading: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilepic: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
});
