import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import BottomTab from './src/Stacks/BottomTab';
import GlobalState from './src/Context/Context';
import Home from './src/Screens/Home';
export const navigationRef = createNavigationContainerRef();

export default function App() {

  const Stack = createNativeStackNavigator();
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };
  return (
    <GlobalState>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{headerShown: options.headerShown}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={options}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
