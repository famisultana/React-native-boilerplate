import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from 'react-redux';
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { colors } from "../utils/Theme";
import Navigator from "../utils/Navigator"

const AuthLoading = (props) => {

  const MyTheme = {
    dark: false,
    colors: {
      primary: colors.primary,
      background: colors.lightBackground,
      card: 'rgb(255, 255, 255)',
      text: colors.textPrimary,
      border: colors.border,
    },
  };

  const [isSignedIn, setStatus] = useState(false);

  useEffect(() => {
    if (props.userReducer !== null) {
      setStatus(true);
    }
    else {
      setStatus(false);
    }

  }, [props]);

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        Navigator.setTopLevelNavigator(navigatorRef);
      }}
      theme={MyTheme}>
      {isSignedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  const { userReducer} = state;
  return { userReducer};
};

export default connect(mapStateToProps)(AuthLoading);
