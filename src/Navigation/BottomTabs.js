import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors} from '../utils/Theme'
import Icon from 'react-native-vector-icons/AntDesign'

import Home from '../Screens/App/Home';
import Profile from '../Screens/App/Profile';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"      
    tabBarOptions={{
      keyboardHidesTabBar:true,
      style: {paddingVertical: 5 },
      activeTintColor: 'red',
      inactiveTintColor:'black'
    }}>
    <Tab.Screen
    name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="home" color={color} size={20}/>
        ),
      }}
    />
    <Tab.Screen
    name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name='user' color={color} size={20}/>
        ),
      }}
    />
  </Tab.Navigator>
  );
}
