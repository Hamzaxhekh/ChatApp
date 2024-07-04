import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import HeaderBar from '../Components/HeaderBar';
import {userData} from '../Utills/ConstantData';
import MainChatBox from '../Components/MainChatBox';
import {GlobalContext} from '../Context/Context';

export default function Chats() {
  const {
    currentUser,
    allChatRooms,
    setAllChatRooms,
    modalVisible,
    setModalVisible,
    setCurrentUser,
    setShowLoginView,
  } = useContext(GlobalContext);
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={'#000000'} />
      <HeaderBar image={true} heading={'Home'} />
      <View style={styles.statusesView}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          <View style={styles.myStatus}>
            <Image
              source={require('../Assets/Images/Mypic.jpeg')}
              style={styles.myImg}
              resizeMode="cover"
            />

            <Text style={styles.userName}>My status</Text>
          </View>
          {userData.map((item, index) => (
            <View style={styles.statusImgStyle} key={index}>
              <Image source={item.imgsrc} style={styles.imageStyle} />
              <Text style={styles.userName}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '700',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 30,
          marginTop: 20,
        }}>
        Welcome {currentUser}!
      </Text>
      <MainChatBox
        dataitem={allChatRooms}
        msg={true}
        timeframe={true}
     
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#000000',
    flex: 1,
  },
  statusesView: {
    height: 100,
  },

  myStatus: {
    alignItems: 'center',
  },
  myImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 10,
  },
  iconStatus: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  statusImgStyle: {
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'orange',
  },
  userName: {
    marginTop: 4,
    color: 'grey',
    fontSize: 12,
  },
});
