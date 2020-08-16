import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'

import Home from '../Screens/App/Home';
import Profile from '../Screens/App/Profile';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"      
    tabBarOptions={{
      showLabel: true,
      keyboardHidesTabBar:true,
      style: { height: 50, paddingVertical: 5 },
      activeTintColor: 'red',
      inactiveTintColor:'black'
    }}>
    <Tab.Screen
    name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name='home' size={20} color={color} />
        ),
      }}
    />
    <Tab.Screen
    name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name='user' size={20} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
