import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { useAppSelector } from '../store/hooks';
import { RootStackParamList } from '../types/navigation.types';
import SplashScreen from '../screens/splash/SplashScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen}/>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

