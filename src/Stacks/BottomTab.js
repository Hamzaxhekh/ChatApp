import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform, StyleSheet, View} from 'react-native';
import Chats from '../Screens/Chats';
import SvgIcon from '../Assets/SVgs/svgicon';
import Xmls from '../Utills/Xmls';
import Calls from '../Screens/Calls';
import Contacts from '../Screens/Contacts';
import Profile from '../Screens/Profile';
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          height: 70,
          backgroundColor: '#ffffff',
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarVisibilityAnimationConfig: {
          show: {
            animation: 'timing',
            config: {
              duration: 0,
            },
          },
          hide: {
            animation: 'timing',
            config: {
              duration: 0,
            },
          },
        },
      }}>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({}) => <SvgIcon xmlPath={Xmls.Chats} />,
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({}) => <SvgIcon xmlPath={Xmls.Call} />,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({}) => <SvgIcon xmlPath={Xmls.Contacts} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({}) => <SvgIcon xmlPath={Xmls.Profile} />,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
