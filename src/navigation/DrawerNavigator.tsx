import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import { DrawerParamList } from '../types/navigation.types';
import SettingsScreen from '../screens/app/SettingsScreen';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
  <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
  <Drawer.Screen name="Setting" component={SettingsScreen} />
</Drawer.Navigator>
  );
}
