import * as React from "react";
import { createStackNavigator,CardStyleInterpolators  } from "@react-navigation/stack";

import SignUp from "../Screens/Auth/SignUp";
import SignIn from "../Screens/Auth/SignIn";
import ForgotPassword from "../Screens/Auth/ForgotPassword";
import NewPassword from "../Screens/Auth/NewPassword"

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
  initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator:CardStyleInterpolators.forScaleFromCenterAndroid,
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />     
    <Stack.Screen name="SignUp" component={SignUp} />    
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name='NewPassword' component={NewPassword} />
  </Stack.Navigator>
);

export default AuthStack ;
