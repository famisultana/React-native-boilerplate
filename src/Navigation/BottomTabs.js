import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors} from '../utils/Theme'

import Home from '../Screens/App/Home';
import Profile from '../Screens/App/Profile';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
    initialRouteName="AddVideo"      
    tabBarOptions={{
      showLabel: false,
      keyboardHidesTabBar:true,
      style: { height: 50, paddingVertical: 5 },
      activeTintColor: colors.primary,
      inactiveTintColor:'black'
    }}>
    <Tab.Screen
    name="Home"
      component={Home}
      options={{
        // tabBarIcon: ({color}) => (
        //   <AddVideoIcon height={30} width={30} fill={color}/>
        // ),
      }}
    />
    <Tab.Screen
    name="Profile"
      component={Profile}
      options={{
        // tabBarIcon: ({color}) => (
        //   <VoteIcon height={30} width={30} fill={color}/>
        // ),
      }}
    />
  </Tab.Navigator>
  );
}
