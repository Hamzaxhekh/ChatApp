import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {userData} from '../Utills/ConstantData';
import SvgIcon from '../Assets/SVgs/svgicon';
import Xmls from '../Utills/Xmls';

export default function MainChatBox({
  headingtext,
  dataitem,
  msg = false,
  timeframe = false,
  callIcons = false,
  calltime = false,
  Status=false
}) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 20, marginHorizontal: 30}}>
        {headingtext && (
          <Text style={{color: '#000000', fontSize: 18}}>{headingtext}</Text>
        )}
          {dataitem && dataitem.length > 0 ? (
        <FlatList
          data={dataitem}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={styles.chats} key={index}>
              <View style={{width: '25%'}}>
                <Image
                  source={item.imgsrc}
                  style={{height: 60, width: 60, borderRadius: 50}}
                />
              </View>
              <View style={{alignItems: 'flex-start', width: '60%'}}>
                <Text
                  style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                {msg && (
                  <Text style={{color: 'grey', fontSize: 14}}>{item.msg}</Text>
                )}
                {calltime && (
                  <Text style={{color: 'grey', fontSize: 14}}>
                    {item.calltime}
                  </Text>
                )}
                {Status && (
                  <Text style={{color: 'grey', fontSize: 14}}>
                  {item.Status}
                </Text>
                )}
              </View>
              {timeframe && (
                <Text style={{color: 'grey', fontSize: 14}}>2 min ago</Text>
              )}
              {callIcons && (
                <View style={{flexDirection: 'row'}}>
                  <SvgIcon xmlPath={Xmls.phoneCall} />
                  <View style={{marginLeft: 10}}>
                    <SvgIcon xmlPath={Xmls.videoCall} />
                  </View>
                </View>
              )}
            </View>
          )}
        />):(
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 22,
              color:'#000000'
            }}>
            No Result found
          </Text>
        </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    justifyContent: 'center',
    flex:1
  },
  chats: {
    flexDirection: 'row',

    marginTop: 30,
  },
});
