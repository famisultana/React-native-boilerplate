import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import BottomTab from './BottomTabs'

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="App"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
    }}>
    <Stack.Screen name='App' component={BottomTab}/>
  </Stack.Navigator>
);

export default HomeStack;
