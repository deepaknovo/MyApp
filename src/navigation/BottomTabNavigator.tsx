import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/app/HomeScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import SettingsScreen from '../screens/app/SettingsScreen';

import { BottomTabParamList } from '../types/navigation.types';
import { Colors } from '../theme/colors';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          borderTopWidth: 0,
          elevation: 10,
          backgroundColor: '#FFFFFF',
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },

        tabBarIcon: ({ color }) => {
          let iconName: string = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Exchange') {
            iconName = 'repeat';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
      />
      <Tab.Screen 
        name="Exchange" 
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
